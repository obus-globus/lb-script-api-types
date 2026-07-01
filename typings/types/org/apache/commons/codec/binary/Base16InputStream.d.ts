import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CodecPolicy } from '../../../../../org/apache/commons/codec/CodecPolicy.d.ts'
import type { Base16 } from '../../../../../org/apache/commons/codec/binary/Base16.d.ts'
import type { Base16InputStream$Builder } from '../../../../../org/apache/commons/codec/binary/Base16InputStream$Builder.d.ts'
import type { BaseNCodecInputStream } from '../../../../../org/apache/commons/codec/binary/BaseNCodecInputStream.d.ts'
export class Base16InputStream extends BaseNCodecInputStream<Base16, Base16InputStream, Base16InputStream$Builder> {
    static builder(): Base16InputStream$Builder;
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: boolean)
    constructor(arg0: InputStream, arg1: boolean, arg2: boolean, arg3: CodecPolicy)
    constructor(arg0: Base16InputStream$Builder, arg1: any)
}