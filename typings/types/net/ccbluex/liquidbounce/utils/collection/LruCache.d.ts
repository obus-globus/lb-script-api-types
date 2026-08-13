import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * @param maxSize Maximum size of the cache. The best values are 2 to the power of {@link Int} like 64, 128, 256...
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/LruCache.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/LruCache.kt:25}
 */
export class LruCache<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static newHashMap<K extends unknown, V extends unknown>(paramarg0: number): JavaMap<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(paramarg0: number): JavaMap<K, V>;
}