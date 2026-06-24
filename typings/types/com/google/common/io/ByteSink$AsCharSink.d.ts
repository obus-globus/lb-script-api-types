import type { ByteSink$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ByteSink } from '../../../../com/google/common/io/ByteSink.d.ts'
import type { CharSink } from '../../../../com/google/common/io/CharSink.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
export class ByteSink$AsCharSink extends CharSink {
    private constructor(null_: ByteSink, charset: Charset)
    constructor(null_: ByteSink, arg1: Charset, arg2: ByteSink$1)
    // private charset: Charset;
    openStream(): Writer;
    toString(): string;
}