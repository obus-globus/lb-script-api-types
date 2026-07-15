import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResourceExtensionsKt extends Object {
    /**
     * Find resource
     *
     * @param path @throws IllegalArgumentException If the path is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:29}
     */
    static resource(path: string): InputStream;
    /**
     * Converts resource to string
     *
     * @param path @throws IllegalArgumentException If the path is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:40}
     */
    static resourceToString(path: string): string;
}