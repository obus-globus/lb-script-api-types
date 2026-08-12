import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResourceExtensionsKt extends Object {
    /**
     * Find resource
     *
     * @param path @throws IllegalArgumentException If the path is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:29}
     */
    static resource(path: string): InputStream;
    /**
     * Converts resource to string
     *
     * @param path @throws IllegalArgumentException If the path is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:40}
     */
    static resourceToString(path: string): string;
}