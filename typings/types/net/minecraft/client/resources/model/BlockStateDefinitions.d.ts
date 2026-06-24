import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class BlockStateDefinitions extends Object {
    static definitionLocationToBlockStateMapper(): (param0: Identifier) => StateDefinition<Block, BlockState>;
    static getItemFrameFakeState(paramisGlowing: boolean, parammap: boolean): BlockState;
    constructor()
}