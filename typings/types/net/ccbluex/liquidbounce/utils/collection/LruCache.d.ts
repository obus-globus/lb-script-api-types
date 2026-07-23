import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * @param maxSize Maximum size of the cache. The best values are 2 to the power of {@link Int} like 64, 128, 256...
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/LruCache.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/collection/LruCache.kt:25}
 */
export class LruCache<K extends unknown, V extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static newHashMap<K extends unknown, V extends unknown>(paramarg0: number): JavaMap<K, V>;
    static newLinkedHashMap<K extends unknown, V extends unknown>(paramarg0: number): JavaMap<K, V>;
}