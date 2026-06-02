import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModelDispatcher } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelDispatcher.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface BlockModelDefinitionGenerator extends Object{
    block(): Block;
    create(): BlockStateModelDispatcher;
}