import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CharCacheData extends Object {
    constructor()
    /**
     * Possible values: {@link UNCACHED}, {@link CACHED} and {@link BLOCKED}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.kt#L252 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.kt:252}
     */
    readonly cacheState: AtomicInteger;
    readonly lastUsage: AtomicLong;
}