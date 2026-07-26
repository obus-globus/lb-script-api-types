import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ZipExtensionsKt extends Object {
    /**
     * Creates a ZIP file from multiple files
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt:77}
     */
    static createZipArchive(self: File[], file: File): void;
    /**
     * Extracts a ZIP archive from an {@link InputStream} to a specified {@link folder} and close it
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/ZipExtensions.kt:66}
     */
    static extractZip(zipFile: File, folder: File): void;
    static extractZip(zipStream: InputStream, folder: File): void;
}