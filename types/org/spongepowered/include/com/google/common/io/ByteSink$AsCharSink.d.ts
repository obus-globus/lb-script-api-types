import type { Writer } from '../../../../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { CharSink } from '../../../../../../../org/spongepowered/include/com/google/common/io/CharSink.d.ts'
export class ByteSink$AsCharSink extends CharSink {
    private constructor(null_: ByteSink$AsCharSink, arg1: Charset)
    // private charset: Charset;
    openStream(): Writer;
    toString(): string;
}