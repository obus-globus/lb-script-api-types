import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { BaseNCodecInputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream.d.ts'
export class Base16InputStream extends BaseNCodecInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: boolean, arg3: CodecPolicy)
}