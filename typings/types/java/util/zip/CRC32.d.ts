import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Checksum } from '../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CRC32 extends Object implements Checksum {
    constructor()
    // private crc: number;
    getValue(): number;
    reset(): void;
    update(arg0: ByteBuffer): void;
    update(arg0: number[]): void;
    update(arg0: number[], arg1: number, arg2: number): void;
    update(arg0: number): void;
    update(arg0: ByteBuffer): void;
    update(arg0: number[]): void;
}