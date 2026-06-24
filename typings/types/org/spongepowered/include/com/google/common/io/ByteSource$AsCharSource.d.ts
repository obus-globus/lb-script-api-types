import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Charset } from '../../../../../../../java/nio/charset/Charset.d.ts'
import type { ByteSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/ByteSource.d.ts'
import type { CharSource } from '../../../../../../../org/spongepowered/include/com/google/common/io/CharSource.d.ts'
export class ByteSource$AsCharSource extends CharSource {
    constructor(null_: ByteSource, arg1: Charset)
    // private charset: Charset;
    openStream(): Reader;
    toString(): string;
}