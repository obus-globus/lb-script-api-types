import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
export class ByteSink$AsCharSink extends CharSink {
    private constructor(null_: ByteSink$AsCharSink, charset: Charset)
    // private charset: Charset;
    openStream(): Writer;
    toString(): string;
}