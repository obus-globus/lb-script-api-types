import type { BaseNCodecOutputStream } from '../../../../io/jsonwebtoken/impl/io/BaseNCodecOutputStream.d.ts'
import type { CodecPolicy } from '../../../../io/jsonwebtoken/impl/io/CodecPolicy.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
export class Base64OutputStream extends BaseNCodecOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean, arg2: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: number, arg3: number[])
    constructor(arg0: OutputStream, arg1: boolean, arg2: number, arg3: number[], arg4: CodecPolicy)
}