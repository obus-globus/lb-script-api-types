import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { FontFace } from '../../../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphDescriptor } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphDescriptor.d.ts'
import type { GlyphIdentifier } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphIdentifier.d.ts'
import type { StaticGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.d.ts'
import type { DynamicFontCacheManager } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.d.ts'
import type { DynamicGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class FontGlyphPageManager extends Object implements AutoCloseable, EventListener {
    constructor(baseFonts: FontFace[], fallbackFonts: FontFace[])
    // private closed: boolean;
    readonly debugDisplayName: Component;
    // private dynamicFontManager: DynamicFontCacheManager;
    // private dynamicPage: DynamicGlyphPage;
    // private dynamicallyLoadedGlyphs: JavaMap<GlyphIdentifier, GlyphDescriptor>;
    // private fallbackFonts: FontFace[];
    // private fallbackGlyphs: JavaMap<FontFace, GlyphDescriptor>;
    // private registeredFonts: FontFace[];
    // private renderHandler: EventHook<GameRenderEvent>;
    readonly running: boolean;
    // private staticGlyphs: JavaMap<FontId, JavaMap<any, any>>;
    // private staticPage: StaticGlyphPage[];
    children(): EventListener[];
    close(): void;
    // private createStaticGlyphRegistry(glyphPages: StaticGlyphPage[]): JavaMap<FontId, JavaMap<any, any>>;
    getFallbackGlyph(font: FontFace): GlyphDescriptor;
    parent(): EventListener | null;
    requestGlyph(font: FontFace, style: number, codepoint: number): GlyphDescriptor | null;
    unregister(): void;
}