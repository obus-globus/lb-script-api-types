import type { HashFunction } from '../../../../../com/viaversion/viaversion/codec/hash/HashFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FallbackCRC32C extends Object implements HashFunction {
    static crc32c(): (param0: number[], param1: number) => number;
    constructor()
    hashBytes(arg0: number[]): number;
    hashBytes(arg0: number[], arg1: number): number;
}