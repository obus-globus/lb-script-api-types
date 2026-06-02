import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockCountingSection } from '../../../../../../../net/caffeinemc/mods/lithium/common/block/BlockCountingSection.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunkSection } from '../../../../../../../net/minecraft/world/level/chunk/LevelChunkSection.d.ts'
import type { Palette } from '../../../../../../../net/minecraft/world/level/chunk/Palette.d.ts'
import type { PalettedContainer$CountConsumer } from '../../../../../../../net/minecraft/world/level/chunk/PalettedContainer$CountConsumer.d.ts'
export class RandomTickingSectionDataHelper$LithiumBlockCounter extends Object implements PalettedContainer$CountConsumer<BlockState> {
    constructor(arg0: number[], arg1: (param0: BlockState, param1: Object | null) => void)
    // private delegate: (param0: BlockState, param1: Object | null) => void;
    // private lastRandomTickableBlockCountTotal: number;
    // private minisectionIndex: number;
    // private randomTickData: number[];
    accept(arg0: BlockState, arg1: number): void;
    finishedCountingMinisection(arg0: Int2IntOpenHashMap, arg1: Palette<BlockState>): void;
    handleAfterCounting(arg0: LevelChunkSection): void;
    // private sanityCheckRandomTickableBlockCount(arg0: BlockCountingSection): number;
}