import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BuiltInRegistriesAccessor } from '../../../../net/fabricmc/fabric/mixin/registry/sync/BuiltInRegistriesAccessor.d.ts'
import type { EntitySubPredicate } from '../../../../net/minecraft/advancements/predicates/entity/EntitySubPredicate.d.ts'
import type { CriterionTrigger } from '../../../../net/minecraft/advancements/triggers/CriterionTrigger.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { DataComponentInitializers } from '../../../../net/minecraft/core/component/DataComponentInitializers.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate$Type } from '../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { NumberFormatType } from '../../../../net/minecraft/network/chat/numbers/NumberFormatType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Dialog } from '../../../../net/minecraft/server/dialog/Dialog.d.ts'
import type { Action } from '../../../../net/minecraft/server/dialog/action/Action.d.ts'
import type { DialogBody } from '../../../../net/minecraft/server/dialog/body/DialogBody.d.ts'
import type { InputControl } from '../../../../net/minecraft/server/dialog/input/InputControl.d.ts'
import type { IncomingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { TicketType } from '../../../../net/minecraft/server/level/TicketType.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
import type { PermissionCheck } from '../../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Stat } from '../../../../net/minecraft/stats/Stat.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { FloatProvider } from '../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { IntProvider } from '../../../../net/minecraft/util/valueproviders/IntProvider.d.ts'
import type { AttributeType } from '../../../../net/minecraft/world/attribute/AttributeType.d.ts'
import type { EnvironmentAttribute } from '../../../../net/minecraft/world/attribute/EnvironmentAttribute.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { MemoryModuleType } from '../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { SensorType } from '../../../../net/minecraft/world/entity/ai/sensing/SensorType.d.ts'
import type { PoiType } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { VillagerProfession } from '../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
import type { VillagerType } from '../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
import type { Activity } from '../../../../net/minecraft/world/entity/schedule/Activity.d.ts'
import type { SpawnCondition } from '../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { CreativeModeTab } from '../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Potion } from '../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { ConsumeEffect$Type } from '../../../../net/minecraft/world/item/consume_effects/ConsumeEffect$Type.d.ts'
import type { RecipeBookCategory } from '../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { RecipeDisplay$Type } from '../../../../net/minecraft/world/item/crafting/display/RecipeDisplay$Type.d.ts'
import type { SlotDisplay$Type } from '../../../../net/minecraft/world/item/crafting/display/SlotDisplay$Type.d.ts'
import type { LevelBasedValue } from '../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentEntityEffect } from '../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { EnchantmentValueEffect } from '../../../../net/minecraft/world/item/enchantment/effects/EnchantmentValueEffect.d.ts'
import type { EnchantmentProvider } from '../../../../net/minecraft/world/item/enchantment/providers/EnchantmentProvider.d.ts'
import type { SlotSource } from '../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { BiomeSource } from '../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { DecoratedPotPattern } from '../../../../net/minecraft/world/level/block/entity/DecoratedPotPattern.d.ts'
import type { ChunkGenerator } from '../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { PositionSourceType } from '../../../../net/minecraft/world/level/gameevent/PositionSourceType.d.ts'
import type { GameRule } from '../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { DensityFunction } from '../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { BlockPredicateType } from '../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicateType.d.ts'
import type { WorldCarver } from '../../../../net/minecraft/world/level/levelgen/carver/WorldCarver.d.ts'
import type { Feature } from '../../../../net/minecraft/world/level/levelgen/feature/Feature.d.ts'
import type { FeatureSizeType } from '../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSizeType.d.ts'
import type { FoliagePlacerType } from '../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacerType.d.ts'
import type { RootPlacerType } from '../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacerType.d.ts'
import type { BlockStateProviderType } from '../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
import type { TreeDecoratorType } from '../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
import type { TrunkPlacerType } from '../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacerType.d.ts'
import type { HeightProviderType } from '../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProviderType.d.ts'
import type { PlacementModifierType } from '../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
import type { StructureType } from '../../../../net/minecraft/world/level/levelgen/structure/StructureType.d.ts'
import type { StructurePieceType } from '../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { StructurePlacementType } from '../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacementType.d.ts'
import type { StructurePoolElementType } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElementType.d.ts'
import type { PoolAliasBinding } from '../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasBinding.d.ts'
import type { PosRuleTestType } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTestType.d.ts'
import type { RuleTestType } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTestType.d.ts'
import type { StructureProcessor } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { RuleBlockEntityModifierType } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifierType.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { MapDecorationType } from '../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
import type { LootPoolEntryContainer } from '../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemFunction } from '../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NbtProvider } from '../../../../net/minecraft/world/level/storage/loot/providers/nbt/NbtProvider.d.ts'
import type { NumberProvider } from '../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
import type { ScoreboardNameProvider } from '../../../../net/minecraft/world/level/storage/loot/providers/score/ScoreboardNameProvider.d.ts'
export class BuiltInRegistries extends Object implements BuiltInRegistriesAccessor<Object> {
    static ACTIVITY: Activity[];
    static ATTRIBUTE: Attribute[];
    static ATTRIBUTE_TYPE: AttributeType<Object>[];
    static BIOME_SOURCE: MapCodec<BiomeSource>[];
    static BLOCK: Block[];
    static BLOCKSTATE_PROVIDER_TYPE: BlockStateProviderType<any>[];
    static BLOCK_ENTITY_TYPE: BlockEntityType<any>[];
    static BLOCK_PREDICATE_TYPE: BlockPredicateType<any>[];
    static BLOCK_TYPE: MapCodec<Block>[];
    static CARVER: WorldCarver<any>[];
    static CHUNK_GENERATOR: MapCodec<ChunkGenerator>[];
    static CHUNK_STATUS: ChunkStatus[];
    static COMMAND_ARGUMENT_TYPE: ArgumentTypeInfo<any, any>[];
    static CONSUME_EFFECT_TYPE: ConsumeEffect$Type<any>[];
    static CREATIVE_MODE_TAB: CreativeModeTab[];
    static CUSTOM_STAT: Identifier[];
    static DATA_COMPONENT_INITIALIZERS: DataComponentInitializers;
    static DATA_COMPONENT_PREDICATE_TYPE: DataComponentPredicate$Type<any>[];
    static DATA_COMPONENT_TYPE: DataComponentType<Object>[];
    static DEBUG_SUBSCRIPTION: DebugSubscription<Object>[];
    static DECORATED_POT_PATTERN: DecoratedPotPattern[];
    static DENSITY_FUNCTION_TYPE: MapCodec<DensityFunction>[];
    static DIALOG_ACTION_TYPE: MapCodec<Action>[];
    static DIALOG_BODY_TYPE: MapCodec<DialogBody>[];
    static DIALOG_TYPE: MapCodec<Dialog>[];
    static ENCHANTMENT_EFFECT_COMPONENT_TYPE: DataComponentType<Object>[];
    static ENCHANTMENT_ENTITY_EFFECT_TYPE: MapCodec<EnchantmentEntityEffect>[];
    static ENCHANTMENT_LEVEL_BASED_VALUE_TYPE: MapCodec<LevelBasedValue>[];
    static ENCHANTMENT_LOCATION_BASED_EFFECT_TYPE: MapCodec<EnchantmentLocationBasedEffect>[];
    static ENCHANTMENT_PROVIDER_TYPE: MapCodec<EnchantmentProvider>[];
    static ENCHANTMENT_VALUE_EFFECT_TYPE: MapCodec<EnchantmentValueEffect>[];
    static ENTITY_SUB_PREDICATE_TYPE: Codec<EntitySubPredicate>[];
    static ENTITY_TYPE: EntityType<any>[];
    static ENVIRONMENT_ATTRIBUTE: EnvironmentAttribute<Object>[];
    static FEATURE: Feature<any>[];
    static FEATURE_SIZE_TYPE: FeatureSizeType<any>[];
    static FLOAT_PROVIDER_TYPE: MapCodec<FloatProvider>[];
    static FLUID: Fluid[];
    static FOLIAGE_PLACER_TYPE: FoliagePlacerType<any>[];
    static GAME_EVENT: GameEvent[];
    static GAME_RULE: GameRule<Object>[];
    static HEIGHT_PROVIDER_TYPE: HeightProviderType<any>[];
    static INCOMING_RPC_METHOD: IncomingRpcMethod<Object, Object>[];
    static INPUT_CONTROL_TYPE: MapCodec<InputControl>[];
    static INT_PROVIDER_TYPE: MapCodec<IntProvider>[];
    static ITEM: Item[];
    static LOOT_CONDITION_TYPE: MapCodec<LootItemCondition>[];
    static LOOT_FUNCTION_TYPE: MapCodec<LootItemFunction>[];
    static LOOT_NBT_PROVIDER_TYPE: MapCodec<NbtProvider>[];
    static LOOT_NUMBER_PROVIDER_TYPE: MapCodec<NumberProvider>[];
    static LOOT_POOL_ENTRY_TYPE: MapCodec<LootPoolEntryContainer>[];
    static LOOT_SCORE_PROVIDER_TYPE: MapCodec<ScoreboardNameProvider>[];
    static MAP_DECORATION_TYPE: MapDecorationType[];
    static MATERIAL_CONDITION: MapCodec<SurfaceRules$ConditionSource>[];
    static MATERIAL_RULE: MapCodec<SurfaceRules$RuleSource>[];
    static MEMORY_MODULE_TYPE: MemoryModuleType<Object>[];
    static MENU: MenuType<any>[];
    static MOB_EFFECT: MobEffect[];
    static NUMBER_FORMAT_TYPE: NumberFormatType<any>[];
    static OUTGOING_RPC_METHOD: OutgoingRpcMethod<Object, Object>[];
    static PARTICLE_TYPE: ParticleType<any>[];
    static PERMISSION_CHECK_TYPE: MapCodec<PermissionCheck>[];
    static PERMISSION_TYPE: MapCodec<Permission>[];
    static PLACEMENT_MODIFIER_TYPE: PlacementModifierType<any>[];
    static POINT_OF_INTEREST_TYPE: PoiType[];
    static POOL_ALIAS_BINDING_TYPE: MapCodec<PoolAliasBinding>[];
    static POSITION_SOURCE_TYPE: PositionSourceType<any>[];
    static POS_RULE_TEST: PosRuleTestType<any>[];
    static POTION: Potion[];
    static RECIPE_BOOK_CATEGORY: RecipeBookCategory[];
    static RECIPE_DISPLAY: RecipeDisplay$Type<any>[];
    static RECIPE_SERIALIZER: RecipeSerializer<any>[];
    static RECIPE_TYPE: RecipeType<any>[];
    static REGISTRY: Object[][];
    static ROOT_PLACER_TYPE: RootPlacerType<any>[];
    static RULE_BLOCK_ENTITY_MODIFIER: RuleBlockEntityModifierType<any>[];
    static RULE_TEST: RuleTestType<any>[];
    static SENSOR_TYPE: SensorType<any>[];
    static SLOT_DISPLAY: SlotDisplay$Type<any>[];
    static SLOT_SOURCE_TYPE: MapCodec<SlotSource>[];
    static SOUND_EVENT: SoundEvent[];
    static SPAWN_CONDITION_TYPE: MapCodec<SpawnCondition>[];
    static STAT_TYPE: Stat<Object>[][];
    static STRUCTURE_PIECE: StructurePieceType[];
    static STRUCTURE_PLACEMENT: StructurePlacementType<any>[];
    static STRUCTURE_POOL_ELEMENT: StructurePoolElementType<any>[];
    static STRUCTURE_PROCESSOR: MapCodec<StructureProcessor>[];
    static STRUCTURE_TYPE: StructureType<any>[];
    static TEST_ENVIRONMENT_DEFINITION_TYPE: MapCodec<TestEnvironmentDefinition<Object>>[];
    static TEST_FUNCTION: (param0: GameTestHelper) => void[];
    static TEST_INSTANCE_TYPE: MapCodec<GameTestInstance>[];
    static TICKET_TYPE: TicketType[];
    static TREE_DECORATOR_TYPE: TreeDecoratorType<any>[];
    static TRIGGER_TYPES: CriterionTrigger<any>[];
    static TRUNK_PLACER_TYPE: TrunkPlacerType<any>[];
    static VILLAGER_PROFESSION: VillagerProfession[];
    static VILLAGER_TYPE: VillagerType[];
    static acquireBootstrapRegistrationLookup<T extends unknown>(paramregistry: T[]): HolderGetter<T>;
    static bootStrap(): void;
    static createContents(): void;
    static getWRITABLE_REGISTRY(): Object[][];
    constructor()
}