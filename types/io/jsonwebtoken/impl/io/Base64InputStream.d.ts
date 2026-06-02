import type { BaseNCodecInputStream } from '../../../../io/jsonwebtoken/impl/io/BaseNCodecInputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
export class Base64InputStream extends BaseNCodecInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: boolean)
}