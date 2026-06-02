import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CheckedInputStream } from '../../../../../java/util/zip/CheckedInputStream.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
export class ChecksumCalculatingInputStream extends CheckedInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: Checksum, arg1: InputStream)
    getValue(): number;
}