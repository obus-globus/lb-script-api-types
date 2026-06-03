import type { FilterInputStream } from '../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Checksum } from '../../../java/util/zip/Checksum.d.ts'
export class CheckedInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream, arg1: Checksum)
    // private cksum: Checksum;
    getChecksum(): Checksum;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}