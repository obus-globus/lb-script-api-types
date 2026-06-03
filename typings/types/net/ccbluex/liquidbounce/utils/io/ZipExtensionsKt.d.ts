import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZipExtensionsKt extends Object {
    /**
     * Creates a ZIP file from multiple files
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt:74}
     */
    static createZipArchive(collection: E[], file: File): void;
    /**
     * Extracts a ZIP archive from an {@link InputStream} to a specified {@link folder} and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt:63}
     */
    static extractZip(paramarg0: File, paramarg1: File): void;
    static extractZip(paramarg0: InputStream, paramarg1: File): void;
}