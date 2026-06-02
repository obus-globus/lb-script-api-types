import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelAccessor } from '../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { BlockState } from '../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface WorldlyContainerHolder extends Object{
    getContainer(state: BlockState, level: LevelAccessor, pos: BlockPos): (Object | null)[];
}