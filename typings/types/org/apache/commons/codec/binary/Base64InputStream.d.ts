import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base64 } from '../../../../../org/apache/commons/codec/binary/Base64.d.ts'
import type { Base64InputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base64InputStream$Builder.d.ts'
import type { BaseNCodecInputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream.d.ts'
export class Base64InputStream extends BaseNCodecInputStream<Base64, Base64InputStream, Base64InputStream$Builder> {
    static builder(): Base64InputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: number, arg3: number[])
    constructor(arg0: InputStream, arg1: boolean, arg2: number, arg3: number[], arg4: CodecPolicy)
}