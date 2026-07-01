import type { HashFunction } from '../../../../../com/viaversion/viaversion/codec/hash/HashFunction.d.ts'
import type { CRC32C } from '../../../../../java/util/zip/CRC32C.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JavaCRC32C extends Object implements HashFunction {
    static crc32c(): (param0: number[], param1: number) => number;
    constructor()
    // private crc: CRC32C;
    hashBytes(arg0: number[]): number;
    hashBytes(arg0: number[], arg1: number): number;
}