import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CharCacheData extends Object {
    constructor()
    /**
     * Possible values: {@link UNCACHED}, {@link REQUESTED}, {@link CACHED} and {@link BLOCKED}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.kt#L261 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/dynamic/DynamicFontCacheManager.kt:261}
     */
    readonly cacheState: AtomicInteger;
    readonly lastUsage: AtomicLong;
}