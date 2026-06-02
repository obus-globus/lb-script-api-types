import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface AoLuminanceFix extends Object{
    apply(arg0: BlockGetter, arg1: BlockPos, arg2: BlockState): number;
}