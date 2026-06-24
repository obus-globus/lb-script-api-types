import type { Base32InputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base32 } from '../../../../../org/apache/commons/codec/binary/Base32.d.ts'
import type { Base32InputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base32InputStream$Builder.d.ts'
import type { BaseNCodecInputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream.d.ts'
export class Base32InputStream extends BaseNCodecInputStream<Base32, Base32InputStream, Base32InputStream$Builder> {
    static builder(): Base32InputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: number, arg3: number[])
    constructor(arg0: InputStream, arg1: boolean, arg2: number, arg3: number[], arg4: CodecPolicy)
    private constructor(arg0: Base32InputStream$Builder)
    constructor(arg0: Base32InputStream$Builder, arg1: Base32InputStream$1)
}