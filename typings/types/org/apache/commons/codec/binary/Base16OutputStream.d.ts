import type { Base16OutputStream$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base16 } from '../../../../../org/apache/commons/codec/binary/Base16.d.ts'
import type { Base16OutputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base16OutputStream$Builder.d.ts'
import type { BaseNCodecOutputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream.d.ts'
export class Base16OutputStream extends BaseNCodecOutputStream<Base16, Base16OutputStream, Base16OutputStream$Builder> {
    static builder(): Base16OutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: boolean, arg3: CodecPolicy)
    private constructor(arg0: Base16OutputStream$Builder)
    constructor(arg0: Base16OutputStream$Builder, arg1: Base16OutputStream$1)
}