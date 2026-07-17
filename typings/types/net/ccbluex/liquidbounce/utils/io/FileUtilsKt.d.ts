import type { Font } from '../../../../../java/awt/Font.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class FileUtilsKt extends Object {
    static createFont(self: File, fontFormat: number): Font;
    static createFont(self: InputStream, fontFormat: number): Font;
    static ensurePngOrConvertJpeg(self: BufferedSource): BufferedSource;
    /**
     * Skips the current line in the file.
     *
     * @returns The number of bytes skipped.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/FileUtils.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/FileUtils.kt:39}
     */
    static skipLine(self: RandomAccessFile): number;
}