// @ts-nocheck
// ===========================================================================
// hud-inject.js  -  add a custom element to the LiquidBounce HUD editor
//                   from a userscript, at runtime, no client patch.
//
// Drop this .js into your LiquidBounce  scripts/  folder and load it. Then open
// ClickGUI -> HUD Editor -> "Add Component" and you'll find "ScriptHud" in the
// list. Add it and it renders on the HUD (a small labelled box) and is
// draggable/removable like any built-in component.
//
// ---------------------------------------------------------------------------
// HOW IT WORKS (verified on LiquidBounce nextgen 0.38.1, MC 26.2)
//
// The HUD editor's component drawer is built from the ACTIVE THEME's factory
// map (Theme.componentFactories) + component group (Theme.componentSettings) --
// see HudComponentManager.getComponentCatalog / Theme.componentCatalog(). There
// is no script API to add to it, and the NATIVE list is typed
// List<MinimapHudComponent> (a final object), so you cannot inject into that.
// The theme path IS reachable: register a factory + a component instance.
//
// Both of those are PRIVATE instance fields, so we reflect. GraalJS blocks
// @CallerSensitive host calls (Field.get/set) from JS directly -- but the
// client ships `ReflectionUtil` (ScriptReflectionUtil) whose invokeMethod runs
// the reflective call Kotlin-side, where the caller check passes. We route the
// field get/set through it. Everything else (constructing the component,
// ValueGroup.tree(), walkInit(), updateComponents()) is a public call.
//
// Caveat: a WebHudComponent normally renders via a theme Svelte element matched
// by name; "ScriptHud" has none, so it would draw blank. We therefore draw it
// ourselves in overlayRender, positioned from the component's editor-managed
// alignment -- so dragging it in the editor moves our drawing.
// ===========================================================================

(function () {
    var COMPONENT_NAME = "ScriptHud";
    var DESCRIPTION    = "A HUD element registered from a userscript.";
    var TAG            = "§8[§bHudInject§8]§r ";

    function chat(m) { try { Client.displayChatMessage(TAG + m); } catch (e) { /* pre-init */ } }

    // Resolve the classes we need up front.
    var ThemeManager = Java.type("net.ccbluex.liquidbounce.integration.theme.ThemeManager");
    var HudManager   = Java.type("net.ccbluex.liquidbounce.integration.theme.component.HudComponentManager");
    var WebHud       = Java.type("net.ccbluex.liquidbounce.integration.theme.component.components.WebHudComponent");
    var Factory      = Java.type("net.ccbluex.liquidbounce.integration.theme.component.HudComponentFactory$NativeHudComponentFactory");
    var Tweak        = Java.type("net.ccbluex.liquidbounce.integration.theme.component.HudComponentTweak");
    var Alignment    = Java.type("net.ccbluex.liquidbounce.utils.render.Alignment");
    var AxisX        = Java.type("net.ccbluex.liquidbounce.utils.render.Alignment$ScreenAxisX");
    var AxisY        = Java.type("net.ccbluex.liquidbounce.utils.render.Alignment$ScreenAxisY");
    var JsonObject   = Java.type("com.google.gson.JsonObject");
    var ArrayReflect = Java.type("java.lang.reflect.Array");
    var LinkedHashMap = Java.type("java.util.LinkedHashMap");

    // The component instance we register (shared with the render handler).
    var component = null;

    // Build a fresh WebHudComponent. Anchored top-right by default; the editor
    // then owns its position via this Alignment tree.
    function buildComponent() {
        return new WebHud(
            COMPONENT_NAME,
            false,                                          // starts disabled (added via the drawer)
            new Alignment(AxisX.RIGHT, 6, AxisY.TOP, 6),    // offsets are Int px
            ArrayReflect.newInstance(Tweak.class, 0),       // HudComponentTweak[0]
            ArrayReflect.newInstance(JsonObject.class, 0),  // JsonObject[0]  (no theme values)
            DESCRIPTION
        );
    }

    // Reflect a private instance field's value, going through ReflectionUtil so
    // the actual Field.get runs Kotlin-side (GraalJS blocks it from JS).
    function getField(obj, cls, fieldName) {
        var f = ReflectionUtil.invokeMethod(cls, "getDeclaredField", fieldName);
        ReflectionUtil.invokeMethod(f, "setAccessible", true);
        return { field: f, value: ReflectionUtil.invokeMethod(f, "get", obj) };
    }
    function setField(field, obj, value) {
        ReflectionUtil.invokeMethod(field, "set", obj, value);
    }

    // Register the component into the active theme. Idempotent + returns false
    // if the theme isn't loaded yet (so the caller can retry).
    function inject() {
        var theme = ThemeManager.INSTANCE.getTheme();
        if (theme == null) return false;
        var themeClass = ReflectionUtil.invokeMethod(theme, "getClass");

        // Skip if we've already registered (e.g. on a script reload).
        var factories = getField(theme, themeClass, "componentFactories");
        if (factories.value != null && factories.value.containsKey(COMPONENT_NAME)) {
            // Re-grab the live instance so render + toggle keep working.
            var comps = theme.getComponents();
            for (var i = 0; i < comps.size(); i++) {
                if (comps.get(i).getName() == COMPONENT_NAME) { component = comps.get(i); break; }
            }
            return true;
        }

        // 1) Register a component instance into the theme's "Components" group.
        var componentSettings = getField(theme, themeClass, "componentSettings").value;
        if (componentSettings == null) return false;
        component = buildComponent();
        componentSettings.tree(component);   // public: adds to the value tree
        component.walkInit();                // public: initialises the value group

        // 2) Register a factory (so the drawer/catalog lists it). Kotlin
        //    () -> HudComponent maps from a JS function via SAM conversion.
        var factory = new Factory(COMPONENT_NAME, false, true, function () { return buildComponent(); });
        var newMap = new LinkedHashMap(factories.value);
        newMap.put(COMPONENT_NAME, factory);
        setField(factories.field, theme, newMap);

        // 3) Tell the frontend to refresh its component list.
        HudManager.INSTANCE.updateComponents();
        return true;
    }

    // --- run the injection (retry once the theme is ready) -----------------
    var injected = false;
    try { injected = inject(); } catch (e) { chat("§cinjection error: " + e); }
    if (injected) {
        chat("§aregistered '" + COMPONENT_NAME + "'  -  open ClickGUI > HUD Editor > Add Component");
    } else {
        chat("§etheme not ready yet - will retry when the module first ticks");
    }

    // --- render host module -------------------------------------------------
    // Enable this module for the element to draw. Its visibility is then
    // controlled by adding/removing "ScriptHud" in the HUD editor.
    var script = registerScript({ name: "HudInject", version: "1.0.0", authors: ["obus"] });

    script.registerModule({
        name: "HudInject",
        category: "Render",
        description: "Renders the script-injected HUD component."
    }, function (mod) {
        mod.on("overlayRender", function (event) {
            // Lazy retry of the injection if the theme wasn't ready at load.
            if (component == null) { try { inject(); } catch (e) { /* keep trying */ } return; }
            if (!component.getEnabled()) return;   // controlled by the HUD editor

            var ctx = event.context;                 // GuiGraphicsExtractor
            var a   = component.getAlignment();
            var gw  = ctx.guiWidth(), gh = ctx.guiHeight();
            var bw  = 96, bh = 13;

            // Position from the editor-managed alignment. Stored offsets are in
            // the browser HUD's gui-scale-2 space; /2 approximates screen px.
            var hoff = a.getHorizontalOffset() / 2.0;
            var voff = a.getVerticalOffset() / 2.0;
            var hs = a.getHorizontalAlignment().toString();
            var vs = a.getVerticalAlignment().toString();
            var x = (hs.indexOf("RIGHT")  >= 0) ? gw - bw - hoff
                  : (hs.indexOf("CENTER") >= 0) ? (gw - bw) / 2 + hoff
                  : hoff;
            var y = (vs.indexOf("BOTTOM") >= 0) ? gh - bh - voff
                  : (vs.indexOf("CENTER") >= 0) ? (gh - bh) / 2 + voff
                  : voff;
            x = Math.floor(x); y = Math.floor(y);

            ctx.fill(x - 2, y - 2, x + bw, y + bh, 0x9016C0E0 | 0);        // translucent bg (ARGB)
            ctx.text(mc.font, "§bScriptHud §7live", x, y, 0xFFFFFFFF | 0, true);
        });
    });
})();
