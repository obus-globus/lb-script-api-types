import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { Palette } from '../../../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
export interface RandomTickingSectionDataHelper$LithiumRandomTickingBlockCounter extends Object{
    lithium$finishedCountingMinisection(arg0: JavaMap<any, any>, arg1: number[], arg2: Palette<BlockState>): void;
    lithium$handleAfterCounting(arg0: LevelChunkSection): void;
    lithium$initRandomTickingBlockCounter(arg0: number[]): void;
    lithium$wholeSectionSingleBlock<T extends unknown>(arg0: T, arg1: number): void;
}