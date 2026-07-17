import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { FabricBlockLootSubProvider } from '../../../../net/fabricmc/fabric/api/datagen/v1/loot/FabricBlockLootSubProvider.d.ts'
import type { ResourceCondition } from '../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { BlockLootSubProviderAccessor } from '../../../../net/fabricmc/fabric/mixin/datagen/loot/BlockLootSubProviderAccessor.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { LootTableSubProvider } from '../../../../net/minecraft/data/loot/LootTableSubProvider.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Property } from '../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
import type { FunctionUserBuilder } from '../../../../net/minecraft/world/level/storage/loot/functions/FunctionUserBuilder.d.ts'
import type { ConditionUserBuilder } from '../../../../net/minecraft/world/level/storage/loot/predicates/ConditionUserBuilder.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
import type { NumberProvider } from '../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export abstract class BlockLootSubProvider extends Object implements FabricBlockLootSubProvider, BlockLootSubProviderAccessor, LootTableSubProvider {
    static createCandleCakeDrops(paramcandle: Block): LootTable$Builder;
    static createSelfDropDispatchTable(paramoriginal: Block, paramcondition: () => LootItemCondition, paramentry: LootPoolEntryContainer$Builder<any>): LootTable$Builder;
    static noDrop(): LootTable$Builder;
    constructor(explosionResistant: Item[], enabledFeatures: FeatureFlagSet, registries: HolderLookup$Provider)
    // private enabledFeatures: FeatureFlagSet;
    // private explosionResistant: Item[];
    map: JavaMap<ResourceKey<LootTable>, LootTable$Builder>;
    readonly registries: HolderLookup$Provider;
    add(block: Block, builder: (param0: Block) => LootTable$Builder): void;
    add(block: Block, builder: LootTable$Builder): void;
    addNetherVinesDropTable(vineBlock: Block, plantBlock: Block): void;
    applyExplosionCondition<T extends ConditionUserBuilder<T>>(type: ItemLike, builder: ConditionUserBuilder<T>): T;
    applyExplosionDecay<T extends FunctionUserBuilder<T>>(type: ItemLike, builder: FunctionUserBuilder<T>): T;
    createAttachedStemDrops(block: Block, drop: Item): LootTable$Builder;
    createBannerDrop(original: Block): LootTable$Builder;
    createBeeHiveDrop(original: Block): LootTable$Builder;
    createBeeNestDrop(original: Block): LootTable$Builder;
    createCandleDrops(block: Block): LootTable$Builder;
    createCaveVinesDrop(original: Block): LootTable$Builder;
    createCopperGolemStatueBlock(block: Block): LootTable$Builder;
    createCopperOreDrops(block: Block): LootTable$Builder;
    createCropDrops(original: Block, cropDrop: Item, seedDrop: Item, isMaxAge: () => LootItemCondition): LootTable$Builder;
    createDoorTable(block: Block): LootTable$Builder;
    createDoublePlantShearsDrop(block: Block): LootTable$Builder;
    createDoublePlantWithSeedDrops(block: Block, drop: Block): LootTable$Builder;
    createGrassDrops(original: Block): LootTable$Builder;
    createLapisOreDrops(block: Block): LootTable$Builder;
    createLeavesDrops(original: Block, sapling: Block, ...saplingChances: number[]): LootTable$Builder;
    createMangroveLeavesDrops(block: Block): LootTable$Builder;
    createMossyCarpetBlockDrops(block: Block): LootTable$Builder;
    createMultifaceBlockDrops(block: Block): LootTable$Builder;
    createMultifaceBlockDrops(block: Block, condition: () => LootItemCondition): LootTable$Builder;
    createMushroomBlockDrop(original: Block, drop: ItemLike): LootTable$Builder;
    createNameableBlockEntityTable(drop: Block): LootTable$Builder;
    createOakLeavesDrops(original: Block, sapling: Block, ...saplingChances: number[]): LootTable$Builder;
    createOreDrop(original: Block, drop: Item): LootTable$Builder;
    createPotFlowerItemTable(flower: ItemLike): LootTable$Builder;
    createRedstoneOreDrops(block: Block): LootTable$Builder;
    createSegmentedBlockDrops(block: Block): LootTable$Builder;
    createShearsDispatchTable(original: Block, entry: LootPoolEntryContainer$Builder<any>): LootTable$Builder;
    createShearsOnlyDrop(drop: ItemLike): LootTable$Builder;
    createShearsOrSilkTouchOnlyDrop(drop: ItemLike): LootTable$Builder;
    createShulkerBoxDrop(shulkerBox: Block): LootTable$Builder;
    createSilkTouchDispatchTable(original: Block, entry: LootPoolEntryContainer$Builder<any>): LootTable$Builder;
    createSilkTouchOnlyTable(drop: ItemLike): LootTable$Builder;
    createSilkTouchOrShearsDispatchTable(original: Block, entry: LootPoolEntryContainer$Builder<any>): LootTable$Builder;
    createSingleItemTable(drop: ItemLike): LootTable$Builder;
    createSingleItemTable(drop: ItemLike, count: NumberProvider): LootTable$Builder;
    createSingleItemTableWithSilkTouch(original: Block, drop: ItemLike): LootTable$Builder;
    createSingleItemTableWithSilkTouch(original: Block, drop: ItemLike, count: NumberProvider): LootTable$Builder;
    createSinglePropConditionTable<T extends Comparable<T> & StringRepresentable>(drop: Block, property: Property<T>, value: T): LootTable$Builder;
    createSlabItemTable(slab: Block): LootTable$Builder;
    createStemDrops(block: Block, drop: Item): LootTable$Builder;
    doesNotHaveShearsOrSilkTouch(): () => LootItemCondition;
    doesNotHaveSilkTouch(): () => LootItemCondition;
    dropOther(block: Block, drop: ItemLike): void;
    dropPottedContents(potted: Block): void;
    dropSelf(block: Block): void;
    dropWhenSilkTouch(block: Block): void;
    generate(): void;
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
    getRegistries(): HolderLookup$Provider;
    hasShears(): () => LootItemCondition;
    hasShearsOrSilkTouch(): () => LootItemCondition;
    hasSilkTouch(): () => LootItemCondition;
    otherWhenSilkTouch(block: Block, other: Block): void;
    withConditions(...arg0: ResourceCondition[]): BlockLootSubProvider;
}