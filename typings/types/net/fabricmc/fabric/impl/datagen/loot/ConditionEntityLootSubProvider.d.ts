import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { EntityLootSubProvider } from '../../../../../../net/minecraft/data/loot/EntityLootSubProvider.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { LootPool$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
export class ConditionEntityLootSubProvider extends EntityLootSubProvider {
    static createSheepDispatchPool(paramtableNames: { [key in DyeColor]: Object | null }): LootPool$Builder;
    constructor(arg0: EntityLootSubProvider, arg1: ResourceCondition[])
    // private conditions: ResourceCondition[];
    // private parent: EntityLootSubProvider;
    add(arg0: EntityType<Object>, arg1: ResourceKey<LootTable>, arg2: LootTable$Builder): void;
    generate(): void;
}