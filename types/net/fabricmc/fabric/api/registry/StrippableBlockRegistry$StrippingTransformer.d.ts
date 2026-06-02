import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface StrippableBlockRegistry$StrippingTransformer extends Object{
    getStrippedBlockState(arg0: Block, arg1: BlockState): BlockState;
}