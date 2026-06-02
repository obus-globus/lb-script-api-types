import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class PosteriorCandidate extends Record {
    constructor(chunkPos: ChunkPos, probability: number)
    // private chunkPos: ChunkPos;
    /*not mapped: */ chunkPos(): ChunkPos;
    // private probability: number;
    /*not mapped: */ probability(): number;
    component1(): ChunkPos;
    component2(): number;
    copy(chunkPos: ChunkPos, probability: number): PosteriorCandidate;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}