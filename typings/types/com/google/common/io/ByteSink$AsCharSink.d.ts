import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
export class ByteSink$AsCharSink extends CharSink {
    constructor(null_: ByteSink, arg1: Charset, arg2: any)
    // private charset: Charset;
    openStream(): Writer;
    toString(): string;
}