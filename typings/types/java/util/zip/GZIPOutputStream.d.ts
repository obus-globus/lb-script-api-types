import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { CRC32 } from '../../../java/util/zip/CRC32.d.ts'
import type { DeflaterOutputStream } from '../../../java/util/zip/DeflaterOutputStream.d.ts'
export class GZIPOutputStream extends DeflaterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean)
    constructor(arg0: OutputStream, arg1: number)
    constructor(arg0: OutputStream, arg1: number, arg2: boolean)
    // private crc: CRC32;
    finish(): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    // private writeHeader(): void;
    // private writeInt(arg0: number, arg1: number[], arg2: number): void;
    // private writeShort(arg0: number, arg1: number[], arg2: number): void;
    // private writeTrailer(arg0: number[], arg1: number): void;
}