import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZipExtensionsKt extends Object {
    /**
     * Creates a ZIP file from multiple files
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt:77}
     */
    static createZipArchive(collection: File[], file: File): void;
    /**
     * Extracts a ZIP archive from an {@link InputStream} to a specified {@link folder} and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt:66}
     */
    static extractZip(paramarg0: File, paramarg1: File): void;
    static extractZip(paramarg0: InputStream, paramarg1: File): void;
}