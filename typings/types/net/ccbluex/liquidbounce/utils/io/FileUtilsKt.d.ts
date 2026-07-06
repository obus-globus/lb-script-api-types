import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { RandomAccessFile } from '../../../../../java/io/RandomAccessFile.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BufferedSource } from '../../../../../okio/BufferedSource.d.ts'
export class FileUtilsKt extends Object {
    static createFont(paramarg0: File, paramarg1: number, paramarg2: Continuation<Object>): Object;
    static createFont(paramarg0: InputStream, paramarg1: number, paramarg2: Continuation<Object>): Object;
    static ensurePngOrConvertJpeg(bufferedSource: BufferedSource): BufferedSource;
    /**
     * Skips the current line in the file.
     *
     * @returns The number of bytes skipped.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/144cde7d640da47d1d98dbd04cfd7a29440805b4/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/FileUtils.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/FileUtils.kt:39}
     */
    static skipLine(randomAccessFile: RandomAccessFile): number;
}