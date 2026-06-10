import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { FontFace } from '../../../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontGlyphPageManager$FontGlyphRegistry } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyphPageManager$FontGlyphRegistry.d.ts'
import type { GlyphDescriptor } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphDescriptor.d.ts'
import type { StaticGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.d.ts'
import type { DynamicFontCacheManager } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.d.ts'
import type { DynamicGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.d.ts'
export class FontGlyphPageManager extends Object implements EventListener {
    constructor(baseFonts: FontFace[], additionalFonts: FontFace[])
    // private availableFonts: Map<FontFace, FontGlyphPageManager$FontGlyphRegistry>;
    // private dynamicFontManager: DynamicFontCacheManager;
    // private dynamicPage: DynamicGlyphPage;
    // private dynamicallyLoadedGlyphs: Long2ObjectOpenHashMap<GlyphDescriptor>;
    // private renderHandler: EventHook<GameRenderEvent>;
    // private staticPage: StaticGlyphPage[];
    children(): EventListener[];
    // private createGlyphRegistries(baseFonts: FontFace[], glyphPages: StaticGlyphPage[]): Map<FontFace, FontGlyphPageManager$FontGlyphRegistry>;
    getFallbackGlyph(font: FontFace): GlyphDescriptor;
    // private getFont(font: FontFace): FontGlyphPageManager$FontGlyphRegistry;
    parent(): EventListener | null;
    requestGlyph(font: FontFace, style: number, ch: string): GlyphDescriptor | null;
    unload(): void;
    unregister(): void;
}