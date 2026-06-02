import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockAndLightGetter } from '../../../../../../net/minecraft/world/level/BlockAndLightGetter.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface FabricBlock extends Object{
    getAppearance(arg0: BlockState, arg1: BlockAndLightGetter, arg2: BlockPos, arg3: Direction, arg4: BlockState, arg5: BlockPos): BlockState;
}