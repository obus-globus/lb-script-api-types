import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { AtomicBoolean } from '../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { Job } from '../../../../../../kotlinx/coroutines/Job.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameRenderEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameRenderEvent.d.ts'
import type { FontFace } from '../../../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontId } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphDescriptor } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphDescriptor.d.ts'
import type { GlyphIdentifier } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphIdentifier.d.ts'
import type { PreparedStaticGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/PreparedStaticGlyphPage.d.ts'
import type { StaticGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/StaticGlyphPage.d.ts'
import type { DynamicFontCacheManager } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.d.ts'
import type { DynamicGlyphPage } from '../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class FontGlyphPageManager extends Object implements AutoCloseable, EventListener {
    constructor(registeredFaces: FontFace[], primaryFace: FontFace, fallbackFonts: FontFace[])
    // private closed: AtomicBoolean;
    // private commonHanWarmupJob: Job | null;
    readonly debugDisplayName: Component;
    // private dynamicFontManager: DynamicFontCacheManager;
    // private dynamicPage: DynamicGlyphPage;
    // private dynamicallyLoadedGlyphs: JavaMap<GlyphIdentifier, GlyphDescriptor>;
    // private fallbackFonts: FontFace[];
    // private fallbackGlyphs: JavaMap<FontFace, GlyphDescriptor>;
    // private primaryFace: FontFace;
    // private registeredFonts: FontFace[];
    // private renderHandler: EventHook<GameRenderEvent>;
    readonly running: boolean;
    // private staticGlyphs: JavaMap<FontId, JavaMap<any, any>>;
    // private staticPage: StaticGlyphPage[];
    // private staticPagesLock: Object;
    children(): EventListener[];
    close(): void;
    // private findResolvedStaticGlyph(requestedFace: FontFace, resolvedFont: FontId, codepoint: number): GlyphDescriptor | null;
    getFallbackGlyph(font: FontFace): GlyphDescriptor;
    // private materializeAndRegister(preparedPages: PreparedStaticGlyphPage[]): boolean;
    parent(): EventListener | null;
    // private registerStaticPages(glyphPages: StaticGlyphPage[]): boolean;
    requestGlyph(font: FontFace, style: number, codepoint: number): GlyphDescriptor | null;
    // private startCommonHanWarmup(): void;
    unregister(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private warmCommonHanGlyphs($completion: Continuation<void>): any;
}