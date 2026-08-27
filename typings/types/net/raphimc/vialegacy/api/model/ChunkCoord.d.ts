import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ChunkCoord extends Object {
    static toLong(paramarg0: number, paramarg1: number): number;
    constructor(arg0: number, arg1: number)
    constructor(arg0: number)
    readonly chunkX: number;
    readonly chunkZ: number;
    equals(arg0: Object | null): boolean;
    getChunkX(): number;
    getChunkZ(): number;
    hashCode(): number;
    toLong(): number;
    toString(): string;
}