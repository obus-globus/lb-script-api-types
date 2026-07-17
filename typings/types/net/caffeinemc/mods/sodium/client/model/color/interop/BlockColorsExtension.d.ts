import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockTintSource } from '../../../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface BlockColorsExtension extends Object{
    sodium$getOverridenVanillaBlocks(): Block[];
    sodium$getProviders(): JavaMap<Block, BlockTintSource[]>;
}