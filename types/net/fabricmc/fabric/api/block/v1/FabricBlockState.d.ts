import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockAndLightGetter } from '../../../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface FabricBlockState extends Object{
    getAppearance(arg0: BlockAndLightGetter, arg1: BlockPos, arg2: Direction, arg3: BlockState, arg4: BlockPos): BlockState;
}