import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { BlockLootSubProvider } from '../../../../../../../net/minecraft/data/loot/BlockLootSubProvider.d.ts'
export interface FabricBlockLootSubProvider extends Object{
    withConditions(arg0: ResourceCondition[]): BlockLootSubProvider;
}