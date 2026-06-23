import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { ReadableByteChannel } from '../../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { CodingErrorAction } from '../../../../java/nio/charset/CodingErrorAction.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { CodePointCharStream } from '../../../../org/antlr/v4/runtime/CodePointCharStream.d.ts'
export class CharStreams extends Object {
    static fromChannel(paramarg0: ReadableByteChannel): CharStream;
    static fromChannel(paramarg0: ReadableByteChannel, paramarg1: Charset): CharStream;
    static fromChannel(paramarg0: ReadableByteChannel, paramarg1: number, paramarg2: CodingErrorAction, paramarg3: string): CodePointCharStream;
    static fromChannel(paramarg0: ReadableByteChannel, paramarg1: Charset, paramarg2: number, paramarg3: CodingErrorAction, paramarg4: string, paramarg5: number): CodePointCharStream;
    static fromFileName(paramarg0: string): CharStream;
    static fromFileName(paramarg0: string, paramarg1: Charset): CharStream;
    static fromPath(paramarg0: Path[][]): CharStream;
    static fromPath(paramarg0: Path[][], paramarg1: Charset): CharStream;
    static fromReader(paramarg0: Reader): CodePointCharStream;
    static fromReader(paramarg0: Reader, paramarg1: string): CodePointCharStream;
    static fromStream(paramarg0: InputStream): CharStream;
    static fromStream(paramarg0: InputStream, paramarg1: Charset): CharStream;
    static fromStream(paramarg0: InputStream, paramarg1: Charset, paramarg2: number): CharStream;
    static fromString(paramarg0: string): CodePointCharStream;
    static fromString(paramarg0: string, paramarg1: string): CodePointCharStream;
    private constructor()
}