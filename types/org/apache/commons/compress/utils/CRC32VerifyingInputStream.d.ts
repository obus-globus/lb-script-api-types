import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { ChecksumVerifyingInputStream } from '../../../../../org/apache/commons/compress/utils/ChecksumVerifyingInputStream.d.ts'
export class CRC32VerifyingInputStream extends ChecksumVerifyingInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: number, arg2: number)
    constructor(arg0: InputStream, arg1: number, arg2: number)
}