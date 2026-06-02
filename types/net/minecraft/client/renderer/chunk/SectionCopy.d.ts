import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { PalettedContainer } from '../../../../../net/minecraft/world/level/chunk/PalettedContainer.d.ts'
export class SectionCopy extends Object {
    constructor(levelChunk: LevelChunk, sectionIndex: number)
    // private blockEntities: Map<BlockPos, BlockEntity>;
    // private debug: boolean;
    // private levelHeightAccessor: LevelHeightAccessor;
    // private section: PalettedContainer<BlockState>;
    getBlockEntity(pos: BlockPos): BlockEntity;
    getBlockState(pos: BlockPos): BlockState;
}