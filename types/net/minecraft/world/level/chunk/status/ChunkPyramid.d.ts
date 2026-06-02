import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChunkStatus } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { ChunkStep } from '../../../../../../net/minecraft/world/level/chunk/status/ChunkStep.d.ts'
export class ChunkPyramid extends Record {
    static GENERATION_PYRAMID: ChunkPyramid;
    static LOADING_PYRAMID: ChunkPyramid;
    constructor(steps: ChunkStep[])
    // private steps: ChunkStep[];
    equals(o: Object | null): boolean;
    getStepTo(status: ChunkStatus): ChunkStep;
    hashCode(): number;
    steps(): ChunkStep[];
    toString(): string;
}