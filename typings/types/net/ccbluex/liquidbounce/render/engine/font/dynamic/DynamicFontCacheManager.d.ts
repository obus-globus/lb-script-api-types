import type { AutoCloseable } from '../../../../../../../java/lang/AutoCloseable.d.ts'
import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { AtomicBoolean } from '../../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Condition } from '../../../../../../../java/util/concurrent/locks/Condition.d.ts'
import type { ReentrantLock } from '../../../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FontGlyph } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/FontGlyph.d.ts'
import type { GlyphIdentifier } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/GlyphIdentifier.d.ts'
import type { CharCacheData } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/CharCacheData.d.ts'
import type { DynamicFontCacheManager$ChangeOnAtlas } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager$ChangeOnAtlas.d.ts'
import type { DynamicGlyphPage } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicGlyphPage.d.ts'
export class DynamicFontCacheManager extends Object implements AutoCloseable {
    constructor(dynamicGlyphPage: DynamicGlyphPage)
    // private cacheData: Map<GlyphIdentifier, CharCacheData>;
    // private dynamicGlyphPage: DynamicGlyphPage;
    // private glyphPageChanges: DynamicFontCacheManager$ChangeOnAtlas[];
    // private glyphPageDirtyFlag: AtomicBoolean;
    // private glyphPageLock: ReentrantLock;
    // private hasRequest: Condition;
    // private requests: GlyphIdentifier[];
    // private requestsLock: ReentrantLock;
    // private running: AtomicBoolean;
    // private workerThread: Thread | null;
    close(): void;
    // private dontRetryAllocationOf(it: GlyphIdentifier): void;
    // private freeSpace(): boolean;
    requestGlyph(fontGlyph: FontGlyph): void;
    startThread(): void;
    // private threadMainLoop(): void;
    // private tryAllocations(requests: FontGlyph[]): FontGlyph[];
    update(): DynamicFontCacheManager$ChangeOnAtlas[];
}