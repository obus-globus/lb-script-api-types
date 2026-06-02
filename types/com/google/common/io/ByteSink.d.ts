import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ByteSink extends Object {
    constructor()
    asCharSink(charset: Charset): CharSink;
    openBufferedStream(): OutputStream;
    openStream(): OutputStream;
    write(bytes: number[]): void;
    writeFrom(input: InputStream): number;
}