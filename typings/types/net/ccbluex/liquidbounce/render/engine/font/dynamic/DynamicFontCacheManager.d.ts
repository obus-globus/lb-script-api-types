import type { AtomicBoolean } from '../../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Condition } from '../../../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../../../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FontFace } from '../../../../../../../net/ccbluex/liquidbounce/render/FontFace.d.ts'
import type { FontGlyph } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { FontId } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontId.d.ts'
import type { GlyphIdentifier } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphIdentifier.d.ts'
import type { CharCacheData } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/CharCacheData.d.ts'
import type { DynamicFontCacheManager$ChangeOnAtlas } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager$ChangeOnAtlas.d.ts'
import type { DynamicGlyphPage } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.d.ts'
export class DynamicFontCacheManager extends Object {
    constructor(dynamicGlyphPage: DynamicGlyphPage, availableFonts: FontFace[])
    // private availableFonts: FontFace[];
    // private cacheData: Map<GlyphIdentifier, CharCacheData>;
    // private dynamicGlyphPage: DynamicGlyphPage;
    // private glyphPageChanges: DynamicFontCacheManager$ChangeOnAtlas[];
    // private glyphPageDirtyFlag: AtomicBoolean;
    // private glyphPageLock: ReentrantLock;
    // private hasRequest: Condition;
    // private requests: GlyphIdentifier[];
    // private requestsLock: ReentrantLock;
    // private createAllocationRequests(requestedGlyphs: GlyphIdentifier[]): FontGlyph[];
    // private dontRetryAllocationOf(it: GlyphIdentifier): void;
    // private findFontForGlyph(ch: GlyphIdentifier): FontId | null;
    // private freeSpace(): void;
    requestGlyph(ch: string, font: number): void;
    startThread(): void;
    // private threadMainLoop(): void;
    // private tryAllocations(requests: FontGlyph[]): FontGlyph[];
    update(): DynamicFontCacheManager$ChangeOnAtlas[];
}