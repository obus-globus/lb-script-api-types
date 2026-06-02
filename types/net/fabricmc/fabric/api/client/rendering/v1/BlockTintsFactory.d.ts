import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockTintsFactory extends Object{
    collect(arg0: BlockState, arg1: BlockAndTintGetter, arg2: BlockPos, arg3: (Object | null)[]): void;
}