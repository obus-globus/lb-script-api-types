import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockStateResolver$Context extends Object{
    block(): Block;
    setModel(arg0: BlockState, arg1: BlockStateModel$UnbakedRoot): void;
}