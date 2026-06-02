import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockBehaviour$StateArgumentPredicate<A extends Object | number | string | boolean> extends Object{
    test(state: BlockState, level: BlockGetter, pos: BlockPos, a: A): boolean;
}