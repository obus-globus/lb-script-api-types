import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { File } from '../../../../java/io/File.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Command } from '../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { ClientModule } from '../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ScriptModule } from './bindings/features/ScriptModule.d.ts'
import type { ScriptMode } from './bindings/features/ScriptMode.d.ts'
import type { ScriptDebugOptions } from '../../../../net/ccbluex/liquidbounce/script/ScriptDebugOptions.d.ts'
import type { Context } from '../../../../org/graalvm/polyglot/Context.d.ts'
import type { Value } from '../../../../org/graalvm/polyglot/Value.d.ts'
// A6: ScriptCommandObject begin
/**
 * The plain object passed to `registerScript(...).registerCommand(...)`.
 * Mirrors what `ScriptCommandBuilder` reads off the value at runtime.
 */
export interface ScriptCommandParameter {
    /** Parameter name shown in usage/autocomplete. */
    name: string;
    /** Defaults to optional; set true to require the parameter. */
    required?: boolean;
    /** Consumes the rest of the input as one vararg parameter. */
    vararg?: boolean;
    /** Autocomplete provider: return the candidate completions. */
    getCompletions?: (begin: string, args: string[]) => string[];
    /** Validator: accept + parsed value, or reject with an error message. */
    validate?: (input: string) => { accept: boolean; value?: unknown; error?: string };
}
export interface ScriptCommandObject {
    /** Primary command name (what the user types after the prefix). */
    name: string;
    /** Alternative names for the command. */
    aliases?: string[];
    /** Positional parameters, in order. */
    parameters?: ScriptCommandParameter[];
    /** Nested subcommands (same shape, recursively). */
    subcommands?: ScriptCommandObject[];
    /** Handler invoked with the parsed argument values. */
    onExecute?: (...args: unknown[]) => void;
    /** Marks this as a hub command (dispatches only to subcommands). */
    hub?: boolean;
}
// A6: ScriptCommandObject end

export class PolyglotScript extends Object implements AutoCloseable {
    constructor(language: string, file: File, debugOptions: ScriptDebugOptions)
    // private context: Context;
    readonly debugOptions: ScriptDebugOptions;
    readonly file: File;
    // private globalEvents: JavaMap<string, () => void>;
    readonly language: string;
    // private registeredCommands: Command[];
    // private registeredModes: Mode[];
    // private registeredModules: ClientModule[];
    /**
     * The script's declared authors (set from the object passed to `registerScript`).
     */
    scriptAuthors: string[];
    // private scriptEnabled: boolean;
    /**
     * The script's declared name (set from the object passed to `registerScript`).
     */
    scriptName: string;
    /**
     * The script's declared version (set from the object passed to `registerScript`).
     */
    scriptVersion: string;
    // private callGlobalEvent(eventName: string): void;
    /**
     * Called when the client unloads the script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L334 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:334}
     */
    close(): void;
    /**
     * Called when the client disables the script. Handles unregistering all modules and commands
     * created with this script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L314 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:314}
     */
    disable(): void;
    /**
     * Called when the client enables the script.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L293 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:293}
     */
    enable(): void;
    /**
     * Initialization of scripts
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L164 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:164}
     */
    initScript(): void;
    /**
     * Binds a handler to one of this script's lifecycle events.
     *
     * @param eventName Lifecycle event to listen for:
     *   - `"load"` - fired once when LiquidBounce finishes loading this
     *               script source (before any module registration takes
     *               effect). Use it for one-time global setup.
     *   - `"enable"` - fired every time the user enables this script in
     *                 the script manager (after `load`, and after each
     *                 hot-reload).
     *   - `"disable"` - fired when the user disables / unloads this
     *                  script. Use it to release resources, unbind
     *                  external listeners, etc.
     * @param handler Zero-argument callback. None of the three lifecycle
     *                events carry a payload.
     *
     * @example
     * ```ts
     * script.on("enable", () => print("hello"));
     * script.on("disable", () => print("bye"));
     * ```
     *
     * Source: `PolyglotScript.kt:282` - KDoc on `fun on`; payload shape
     * confirmed by `callGlobalEvent` call sites.
     */
    on(eventName: "load" | "enable" | "disable", handler: () => void): void;
    /** @deprecated Only "load" | "enable" | "disable" are dispatched by PolyglotScript - see `callGlobalEvent` in PolyglotScript.kt. Use the literal-overload above for editor autocomplete. */
    on(eventName: string, handler: () => void): void;
    /**
     * Registers a new script choice to an existing choice configurable which can be obtained
     * from existing modules.
     *
     * @param modeValueGroup The choice configurable to add the choice to.
     * @param modeObject JavaScript object containing information about the choice.
     * @param callback JavaScript function to which the corresponding instance of {@link ScriptMode} is passed.
     * @see ScriptMode
     * @see ModeValueGroup
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L270 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:270}
     * @deprecated Use registerMode instead Use `registerMode(modeValueGroup, modeObject, callback)`.
     */
    registerChoice(modeValueGroup: ModeValueGroup<Mode>, modeObject: { [key: string]: unknown }, callback: (mode: ScriptMode) => void): void;
    /**
     * Registers a new script command
     *
     * @param commandObject From the command builder.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L230 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:230}
     */
    registerCommand(commandObject: ScriptCommandObject): void;
    /**
     * Registers a new script mode to an existing mode value group which can be obtained
     * from existing modules.
     *
     * @param modeValueGroup The choice configurable to add the choice to.
     * @param modeObject JavaScript object containing information about the choice.
     * @param callback JavaScript function to which the corresponding instance of {@link ScriptMode} is passed.
     * @see ScriptMode
     * @see ModeValueGroup
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt#L247 | src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt:247}
     */
    registerMode(modeValueGroup: ModeValueGroup<Mode>, modeObject: { [key: string]: unknown }, callback: (mode: ScriptMode) => void): void;
    /**
     * Registers a new module backed by this script. The callback receives a
     * fully-constructed {@link ScriptModule} which you configure (settings,
     * event handlers, render logic) before returning. The module is added
     * to LiquidBounce's module manager as soon as your script is enabled.
     *
     * @param moduleObject Metadata describing the module. Settings are
     *                     declared here, under the `settings` key, with the
     *                     global {@link ScriptSetting `Setting`} factories -
     *                     they are read back inside the callback via
     *                     `mod.settings.<key>`.
     * @param moduleObject.name Display name shown in the ClickGUI.
     * @param moduleObject.category One of `"Combat" | "Movement" | "Player" | "Render" | "World" | "Misc" | "Fun" | "Exploit"`.
     * @param callback Configurator invoked once at registration. Use it to
     *                 bind events (`mod.on(...)`) and define behaviour.
     *
     * @example
     * ```ts
     * script.registerModule({
     *     name: "MyModule",
     *     category: "Misc",
     *     settings: {
     *         loud: Setting.boolean({ name: "Loud", default: false }),
     *     },
     * }, (mod) => {
     *     mod.on("enable", () => {
     *         if (mod.settings.loud.get()) print("on!");
     *     });
     * });
     * ```
     *
     * Source: `ScriptModule.kt` - the `settings` map is read from the
     * moduleObject at construction. (Upstream has no KDoc example; this
     * docstring is authored locally.)
     */
    registerModule(moduleObject: { name: string; category: string; [key: string]: unknown }, callback: (mod: ScriptModule) => void): void;
}