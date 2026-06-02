import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricModelProviderDefinitions } from '../../../../../../net/fabricmc/fabric/impl/datagen/client/FabricModelProviderDefinitions.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export interface FabricItemAssetDefinitions extends Object, FabricModelProviderDefinitions{
    fabric_setProcessedBlocks(arg0: Block[]): void;
}