import type { HashFunction } from '../../../../../com/viaversion/viaversion/codec/hash/HashFunction.d.ts'
import type { CRC32C } from '../../../../../java/util/zip/CRC32C.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JavaCRC32C extends Object implements HashFunction {
    constructor()
    // private crc: CRC32C;
    hashBytes(arg0: number[]): number;
    hashBytes(arg0: number[], arg1: number): number;
}