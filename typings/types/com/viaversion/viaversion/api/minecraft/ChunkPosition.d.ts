import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChunkPosition extends Object {
    static chunkKey(paramarg0: number, paramarg1: number): number;
    static chunkKeyForBlock(paramarg0: number, paramarg1: number): number;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number)
    // private chunkX: number;
    // private chunkZ: number;
    chunkKey(): number;
    chunkX(): number;
    chunkZ(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}