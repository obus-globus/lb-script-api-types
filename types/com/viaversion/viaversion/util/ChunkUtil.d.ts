import type { Chunk } from '../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ChunkUtil extends Object {
    static createEmptyChunk(paramarg0: number, paramarg1: number): Chunk;
    static createEmptyChunk(paramarg0: number, paramarg1: number, paramarg2: number): Chunk;
    static createEmptyChunk(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): Chunk;
    static setDummySkylight(paramarg0: Chunk): void;
    static setDummySkylight(paramarg0: Chunk, paramarg1: boolean): void;
    constructor()
}