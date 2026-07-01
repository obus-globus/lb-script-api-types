import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base32 } from '../../../../../org/apache/commons/codec/binary/Base32.d.ts'
import type { Base32OutputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base32OutputStream$Builder.d.ts'
import type { BaseNCodecOutputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream.d.ts'
export class Base32OutputStream extends BaseNCodecOutputStream<Base32, Base32OutputStream, Base32OutputStream$Builder> {
    static builder(): Base32OutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: number, arg3: number[])
    constructor(arg0: OutputStream, arg1: boolean, arg2: number, arg3: number[], arg4: CodecPolicy)
    constructor(arg0: Base32OutputStream$Builder, arg1: any)
}