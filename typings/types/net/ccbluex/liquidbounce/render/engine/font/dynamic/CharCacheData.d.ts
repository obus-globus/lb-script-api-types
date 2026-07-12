import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CharCacheData extends Object {
    constructor()
    /**
     * Possible values: {@link UNCACHED}, {@link CACHED} and {@link BLOCKED}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.kt#L255 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.kt:255}
     */
    readonly cacheState: AtomicInteger;
    readonly lastUsage: AtomicLong;
}