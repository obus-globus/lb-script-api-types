import type { Base58OutputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Base58 } from '../../../../../org/apache/commons/codec/binary/Base58.d.ts'
import type { Base58OutputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base58OutputStream$Builder.d.ts'
import type { BaseNCodecOutputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream.d.ts'
export class Base58OutputStream extends BaseNCodecOutputStream<Base58, Base58OutputStream, Base58OutputStream$Builder> {
    static builder(): Base58OutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    private constructor(arg0: Base58OutputStream$Builder)
    constructor(arg0: Base58OutputStream$Builder, arg1: Base58OutputStream$1)
}