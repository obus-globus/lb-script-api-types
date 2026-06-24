import type { Base58InputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Base58 } from '../../../../../org/apache/commons/codec/binary/Base58.d.ts'
import type { Base58InputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base58InputStream$Builder.d.ts'
import type { BaseNCodecInputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream.d.ts'
export class Base58InputStream extends BaseNCodecInputStream<Base58, Base58InputStream, Base58InputStream$Builder> {
    static builder(): Base58InputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    private constructor(arg0: Base58InputStream$Builder)
    constructor(arg0: Base58InputStream$Builder, arg1: Base58InputStream$1)
}