import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { CheckedInputStream } from '../../../../../java/util/zip/CheckedInputStream.d.ts'
import type { Checksum } from '../../../../../java/util/zip/Checksum.d.ts'
export class ChecksumVerifyingInputStream extends CheckedInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: Checksum, arg1: InputStream, arg2: number, arg3: number)
    // private expected: number;
    // private remaining: number;
    getBytesRemaining(): number;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    // private verify(): void;
}