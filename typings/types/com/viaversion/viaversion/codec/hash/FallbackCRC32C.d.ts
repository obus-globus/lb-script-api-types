import type { HashFunction } from '../../../../../com/viaversion/viaversion/codec/hash/HashFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FallbackCRC32C extends Object implements HashFunction {
    constructor()
    hashBytes(arg0: number[]): number;
    hashBytes(arg0: number[], arg1: number): number;
}