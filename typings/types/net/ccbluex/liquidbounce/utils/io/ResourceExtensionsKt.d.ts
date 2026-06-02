import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResourceExtensionsKt extends Object {
    /**
     * Find resource
     *
     * @throws IllegalArgumentException If the path is invalid
     *
     * @param path The *absolute* resource path
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:23}
     */
    static resource(paramarg0: string): InputStream;
    /**
     * Converts resource to string
     *
     * @throws IllegalArgumentException If the path is invalid
     *
     * @param path The *absolute* resource path
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:34}
     */
    static resourceToString(paramarg0: string): string;
}