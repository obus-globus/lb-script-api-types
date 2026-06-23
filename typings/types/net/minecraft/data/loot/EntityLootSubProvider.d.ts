import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricEntityLootSubProvider } from '../../../../net/fabricmc/fabric/api/datagen/v1/loot/FabricEntityLootSubProvider.d.ts'
import type { ResourceCondition } from '../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { EntityLootSubProviderAccessor } from '../../../../net/fabricmc/fabric/mixin/datagen/loot/EntityLootSubProviderAccessor.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LootTableSubProvider } from '../../../../net/minecraft/data/loot/LootTableSubProvider.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { FrogVariant } from '../../../../net/minecraft/world/entity/animal/frog/FrogVariant.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { DyeColor } from '../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { LootPool$Builder } from '../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
import type { AnyOfCondition$Builder } from '../../../../net/minecraft/world/level/storage/loot/predicates/AnyOfCondition$Builder.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export abstract class EntityLootSubProvider extends Object implements FabricEntityLootSubProvider, EntityLootSubProviderAccessor, LootTableSubProvider {
    static createSheepDispatchPool(paramtableNames: { [key in DyeColor]: ResourceKey<LootTable> }): LootPool$Builder;
    constructor(enabledFeatures: FeatureFlagSet, registries: HolderLookup$Provider)
    constructor(allowed: FeatureFlagSet, required: FeatureFlagSet, registries: HolderLookup$Provider)
    // private allowed: FeatureFlagSet;
    map: Map<EntityType<any>, Map<ResourceKey<LootTable>, LootTable$Builder>>;
    readonly registries: HolderLookup$Provider;
    // private required: FeatureFlagSet;
    add(type: EntityType<any>, lootTable: ResourceKey<LootTable>, builder: LootTable$Builder): void;
    add(type: EntityType<any>, builder: LootTable$Builder): void;
    generate(): void;
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
    getRegistries(): HolderLookup$Provider;
    killedByFrog(entityTypes: HolderGetter<EntityType<any>>): () => LootItemCondition;
    killedByFrogVariant(entityTypes: HolderGetter<EntityType<any>>, frogVariants: HolderGetter<FrogVariant>, variant: ResourceKey<FrogVariant>): () => LootItemCondition;
    shouldSmeltLoot(): AnyOfCondition$Builder;
    withConditions(arg0: ResourceCondition[]): EntityLootSubProvider;
}