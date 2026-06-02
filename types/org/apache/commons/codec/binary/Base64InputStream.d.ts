import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { BaseNCodecInputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream.d.ts'
export class Base64InputStream extends BaseNCodecInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: number, arg3: number[])
    constructor(arg0: InputStream, arg1: boolean, arg2: number, arg3: number[], arg4: CodecPolicy)
}