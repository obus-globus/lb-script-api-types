import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { EntityLootSubProvider } from '../../../../../../../net/minecraft/data/loot/EntityLootSubProvider.d.ts'
export interface FabricEntityLootSubProvider extends Object{
    withConditions(arg0: ResourceCondition[]): EntityLootSubProvider;
}