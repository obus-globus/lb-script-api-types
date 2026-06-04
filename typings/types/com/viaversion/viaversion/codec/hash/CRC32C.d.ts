import type { HashFunction } from '../../../../../com/viaversion/viaversion/codec/hash/HashFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CRC32C extends Object implements HashFunction {
    static CRC32C: (param0: number[], param1: number) => kotlin.Int;
    constructor()
    hashBytes(arg0: number[]): number;
    hashBytes(arg0: number[], arg1: number): number;
}