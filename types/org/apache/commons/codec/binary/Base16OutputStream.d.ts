import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { BaseNCodecOutputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecOutputStream.d.ts'
export class Base16OutputStream extends BaseNCodecOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: boolean, arg3: CodecPolicy)
}