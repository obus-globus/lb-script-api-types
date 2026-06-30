import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResourceExtensionsKt extends Object {
    /**
     * Find resource
     *
     * @param path @throws IllegalArgumentException If the path is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:29}
     */
    static resource(path: string): InputStream;
    /**
     * Converts resource to string
     *
     * @param path @throws IllegalArgumentException If the path is invalid
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ResourceExtensions.kt:40}
     */
    static resourceToString(path: string): string;
}