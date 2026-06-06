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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:23}
     */
    static resource(path: string): InputStream;
    /**
     * Converts resource to string
     *
     * @throws IllegalArgumentException If the path is invalid
     *
     * @param path The *absolute* resource path
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:34}
     */
    static resourceToString(path: string): string;
}