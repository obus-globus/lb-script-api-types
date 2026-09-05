import type { Font } from '../../../../../java/awt/Font.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class FileUtilsKt extends Object {
    static PNG_AND_JPG: string[];
    static createFont(self: File, fontFormat: number): Font;
    static createFont(self: InputStream, fontFormat: number): Font;
    static ensurePngOrConvertJpeg(self: BufferedSource): BufferedSource;
    /**
     * Skips the current line in the file.
     *
     * @returns The number of bytes skipped.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/FileUtils.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/FileUtils.kt:40}
     */
    static skipLine(self: RandomAccessFile): number;
}