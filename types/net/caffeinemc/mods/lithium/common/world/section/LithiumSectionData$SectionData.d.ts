import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkSectionChangeCallback } from '../../../../../../../net/caffeinemc/mods/lithium/common/tracking/block/ChunkSectionChangeCallback.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
export class LithiumSectionData$SectionData extends Object {
    constructor(arg0: LevelChunkSection)
    readonly changeListener: ChunkSectionChangeCallback;
    readonly countsByFlag: number[];
    readonly randomTickableBlocksByY: number[];
    getChangeListener(): ChunkSectionChangeCallback;
    getCountsByFlag(): number[];
    getRandomTickableBlocksByY(): number[];
    setChangeListener(arg0: ChunkSectionChangeCallback): void;
    setCountsByFlag(arg0: number[]): void;
    setRandomTickableBlocksByY(arg0: number[]): void;
    toString(): string;
}