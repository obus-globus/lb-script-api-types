import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base64 } from '../../../../../org/apache/commons/codec/binary/Base64.d.ts'
import type { Base64OutputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base64OutputStream$Builder.d.ts'
import type { BaseNCodecOutputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream.d.ts'
export class Base64OutputStream extends BaseNCodecOutputStream<Base64, Base64OutputStream, Base64OutputStream$Builder> {
    static builder(): Base64OutputStream$Builder;
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: number, arg3: number[])
    constructor(arg0: OutputStream, arg1: boolean, arg2: number, arg3: number[], arg4: CodecPolicy)
    constructor(arg0: Base64OutputStream$Builder, arg1: any)
}