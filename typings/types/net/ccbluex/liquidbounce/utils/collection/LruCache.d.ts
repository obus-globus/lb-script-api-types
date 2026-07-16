import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * @param maxSize Maximum size of the cache. The best values are 2 to the power of {@link Int} like 64, 128, 256...
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/LruCache.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/LruCache.kt:25}
 */
export class LruCache<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static newHashMap<K extends unknown, V extends unknown>(paramarg0: number): Map<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(paramarg0: number): Map<K, V>;
}