import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Advancement } from '../../../../net/minecraft/advancements/Advancement.d.ts'
import type { CriterionTrigger } from '../../../../net/minecraft/advancements/CriterionTrigger.d.ts'
import type { EntitySubPredicate } from '../../../../net/minecraft/advancements/criterion/EntitySubPredicate.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate$Type } from '../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { GameTestHelper } from '../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { ChatType } from '../../../../net/minecraft/network/chat/ChatType.d.ts'
import type { NumberFormatType } from '../../../../net/minecraft/network/chat/numbers/NumberFormatType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
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
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { DamageType } from '../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { MemoryModuleType } from '../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
import type { SensorType } from '../../../../net/minecraft/world/entity/ai/sensing/SensorType.d.ts'
import type { PoiType } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { ChickenSoundVariant } from '../../../../net/minecraft/world/entity/animal/chicken/ChickenSoundVariant.d.ts'
import type { ChickenVariant } from '../../../../net/minecraft/world/entity/animal/chicken/ChickenVariant.d.ts'
import type { CowSoundVariant } from '../../../../net/minecraft/world/entity/animal/cow/CowSoundVariant.d.ts'
import type { CowVariant } from '../../../../net/minecraft/world/entity/animal/cow/CowVariant.d.ts'
import type { CatSoundVariant } from '../../../../net/minecraft/world/entity/animal/feline/CatSoundVariant.d.ts'
import type { CatVariant } from '../../../../net/minecraft/world/entity/animal/feline/CatVariant.d.ts'
import type { FrogVariant } from '../../../../net/minecraft/world/entity/animal/frog/FrogVariant.d.ts'
import type { ZombieNautilusVariant } from '../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilusVariant.d.ts'
import type { PigSoundVariant } from '../../../../net/minecraft/world/entity/animal/pig/PigSoundVariant.d.ts'
import type { PigVariant } from '../../../../net/minecraft/world/entity/animal/pig/PigVariant.d.ts'
import type { WolfSoundVariant } from '../../../../net/minecraft/world/entity/animal/wolf/WolfSoundVariant.d.ts'
import type { WolfVariant } from '../../../../net/minecraft/world/entity/animal/wolf/WolfVariant.d.ts'
import type { PaintingVariant } from '../../../../net/minecraft/world/entity/decoration/painting/PaintingVariant.d.ts'
import type { VillagerProfession } from '../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
import type { VillagerType } from '../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
import type { Activity } from '../../../../net/minecraft/world/entity/schedule/Activity.d.ts'
import type { SpawnCondition } from '../../../../net/minecraft/world/entity/variant/SpawnCondition.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { CreativeModeTab } from '../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { Instrument } from '../../../../net/minecraft/world/item/Instrument.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { JukeboxSong } from '../../../../net/minecraft/world/item/JukeboxSong.d.ts'
import type { Potion } from '../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { ConsumeEffect$Type } from '../../../../net/minecraft/world/item/consume_effects/ConsumeEffect$Type.d.ts'
import type { Recipe } from '../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeBookCategory } from '../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { RecipeSerializer } from '../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { RecipeDisplay$Type } from '../../../../net/minecraft/world/item/crafting/display/RecipeDisplay$Type.d.ts'
import type { SlotDisplay$Type } from '../../../../net/minecraft/world/item/crafting/display/SlotDisplay$Type.d.ts'
import type { Enchantment } from '../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { LevelBasedValue } from '../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentEntityEffect } from '../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { EnchantmentValueEffect } from '../../../../net/minecraft/world/item/enchantment/effects/EnchantmentValueEffect.d.ts'
import type { EnchantmentProvider } from '../../../../net/minecraft/world/item/enchantment/providers/EnchantmentProvider.d.ts'
import type { TrimMaterial } from '../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
import type { TrimPattern } from '../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
import type { SlotSource } from '../../../../net/minecraft/world/item/slot/SlotSource.d.ts'
import type { TradeSet } from '../../../../net/minecraft/world/item/trading/TradeSet.d.ts'
import type { VillagerTrade } from '../../../../net/minecraft/world/item/trading/VillagerTrade.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeSource } from '../../../../net/minecraft/world/level/biome/BiomeSource.d.ts'
import type { MultiNoiseBiomeSourceParameterList } from '../../../../net/minecraft/world/level/biome/MultiNoiseBiomeSourceParameterList.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BannerPattern } from '../../../../net/minecraft/world/level/block/entity/BannerPattern.d.ts'
import type { BlockEntityType } from '../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { DecoratedPotPattern } from '../../../../net/minecraft/world/level/block/entity/DecoratedPotPattern.d.ts'
import type { TrialSpawnerConfig } from '../../../../net/minecraft/world/level/block/entity/trialspawner/TrialSpawnerConfig.d.ts'
import type { ChunkGenerator } from '../../../../net/minecraft/world/level/chunk/ChunkGenerator.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { DimensionType } from '../../../../net/minecraft/world/level/dimension/DimensionType.d.ts'
import type { LevelStem } from '../../../../net/minecraft/world/level/dimension/LevelStem.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { PositionSourceType } from '../../../../net/minecraft/world/level/gameevent/PositionSourceType.d.ts'
import type { GameRule } from '../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { DensityFunction } from '../../../../net/minecraft/world/level/levelgen/DensityFunction.d.ts'
import type { NoiseGeneratorSettings } from '../../../../net/minecraft/world/level/levelgen/NoiseGeneratorSettings.d.ts'
import type { SurfaceRules$ConditionSource } from '../../../../net/minecraft/world/level/levelgen/SurfaceRules$ConditionSource.d.ts'
import type { SurfaceRules$RuleSource } from '../../../../net/minecraft/world/level/levelgen/SurfaceRules$RuleSource.d.ts'
import type { BlockPredicateType } from '../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicateType.d.ts'
import type { ConfiguredWorldCarver } from '../../../../net/minecraft/world/level/levelgen/carver/ConfiguredWorldCarver.d.ts'
import type { WorldCarver } from '../../../../net/minecraft/world/level/levelgen/carver/WorldCarver.d.ts'
import type { ConfiguredFeature } from '../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { Feature } from '../../../../net/minecraft/world/level/levelgen/feature/Feature.d.ts'
import type { FeatureSizeType } from '../../../../net/minecraft/world/level/levelgen/feature/featuresize/FeatureSizeType.d.ts'
import type { FoliagePlacerType } from '../../../../net/minecraft/world/level/levelgen/feature/foliageplacers/FoliagePlacerType.d.ts'
import type { RootPlacerType } from '../../../../net/minecraft/world/level/levelgen/feature/rootplacers/RootPlacerType.d.ts'
import type { BlockStateProviderType } from '../../../../net/minecraft/world/level/levelgen/feature/stateproviders/BlockStateProviderType.d.ts'
import type { TreeDecoratorType } from '../../../../net/minecraft/world/level/levelgen/feature/treedecorators/TreeDecoratorType.d.ts'
import type { TrunkPlacerType } from '../../../../net/minecraft/world/level/levelgen/feature/trunkplacers/TrunkPlacerType.d.ts'
import type { FlatLevelGeneratorPreset } from '../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorPreset.d.ts'
import type { HeightProviderType } from '../../../../net/minecraft/world/level/levelgen/heightproviders/HeightProviderType.d.ts'
import type { PlacedFeature } from '../../../../net/minecraft/world/level/levelgen/placement/PlacedFeature.d.ts'
import type { PlacementModifierType } from '../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
import type { WorldPreset } from '../../../../net/minecraft/world/level/levelgen/presets/WorldPreset.d.ts'
import type { Structure } from '../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureSet } from '../../../../net/minecraft/world/level/levelgen/structure/StructureSet.d.ts'
import type { StructureType } from '../../../../net/minecraft/world/level/levelgen/structure/StructureType.d.ts'
import type { StructurePieceType } from '../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { StructurePlacementType } from '../../../../net/minecraft/world/level/levelgen/structure/placement/StructurePlacementType.d.ts'
import type { StructurePoolElementType } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElementType.d.ts'
import type { StructureTemplatePool } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { PoolAliasBinding } from '../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasBinding.d.ts'
import type { PosRuleTestType } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/PosRuleTestType.d.ts'
import type { RuleTestType } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/RuleTestType.d.ts'
import type { StructureProcessorList } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorList.d.ts'
import type { StructureProcessorType } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessorType.d.ts'
import type { RuleBlockEntityModifierType } from '../../../../net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity/RuleBlockEntityModifierType.d.ts'
import type { NormalNoise$NoiseParameters } from '../../../../net/minecraft/world/level/levelgen/synth/NormalNoise$NoiseParameters.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { MapDecorationType } from '../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
import type { LootTable } from '../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootPoolEntryContainer } from '../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemFunction } from '../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NbtProvider } from '../../../../net/minecraft/world/level/storage/loot/providers/nbt/NbtProvider.d.ts'
import type { NumberProvider } from '../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
import type { ScoreboardNameProvider } from '../../../../net/minecraft/world/level/storage/loot/providers/score/ScoreboardNameProvider.d.ts'
import type { Timeline } from '../../../../net/minecraft/world/timeline/Timeline.d.ts'
export class Registries extends Object {
    static ACTIVITY: ResourceKey<Activity[]>;
    static ADVANCEMENT: ResourceKey<Advancement[]>;
    static ATTRIBUTE: ResourceKey<Attribute[]>;
    static ATTRIBUTE_TYPE: ResourceKey<AttributeType<Object>[]>;
    static BANNER_PATTERN: ResourceKey<BannerPattern[]>;
    static BIOME: ResourceKey<Biome[]>;
    static BIOME_SOURCE: ResourceKey<MapCodec<BiomeSource>[]>;
    static BLOCK: ResourceKey<Block[]>;
    static BLOCK_ENTITY_TYPE: ResourceKey<BlockEntityType<any>[]>;
    static BLOCK_PREDICATE_TYPE: ResourceKey<BlockPredicateType<any>[]>;
    static BLOCK_STATE_PROVIDER_TYPE: ResourceKey<BlockStateProviderType<any>[]>;
    static BLOCK_TYPE: ResourceKey<MapCodec<Block>[]>;
    static CARVER: ResourceKey<WorldCarver<any>[]>;
    static CAT_SOUND_VARIANT: ResourceKey<CatSoundVariant[]>;
    static CAT_VARIANT: ResourceKey<CatVariant[]>;
    static CHAT_TYPE: ResourceKey<ChatType[]>;
    static CHICKEN_SOUND_VARIANT: ResourceKey<ChickenSoundVariant[]>;
    static CHICKEN_VARIANT: ResourceKey<ChickenVariant[]>;
    static CHUNK_GENERATOR: ResourceKey<MapCodec<ChunkGenerator>[]>;
    static CHUNK_STATUS: ResourceKey<ChunkStatus[]>;
    static COMMAND_ARGUMENT_TYPE: ResourceKey<ArgumentTypeInfo<any, any>[]>;
    static CONFIGURED_CARVER: ResourceKey<ConfiguredWorldCarver<any>[]>;
    static CONFIGURED_FEATURE: ResourceKey<ConfiguredFeature<any, any>[]>;
    static CONSUME_EFFECT_TYPE: ResourceKey<ConsumeEffect$Type<any>[]>;
    static COW_SOUND_VARIANT: ResourceKey<CowSoundVariant[]>;
    static COW_VARIANT: ResourceKey<CowVariant[]>;
    static CREATIVE_MODE_TAB: ResourceKey<CreativeModeTab[]>;
    static CUSTOM_STAT: ResourceKey<Identifier[]>;
    static DAMAGE_TYPE: ResourceKey<DamageType[]>;
    static DATA_COMPONENT_PREDICATE_TYPE: ResourceKey<DataComponentPredicate$Type<any>[]>;
    static DATA_COMPONENT_TYPE: ResourceKey<DataComponentType<Object>[]>;
    static DEBUG_SUBSCRIPTION: ResourceKey<DebugSubscription<Object>[]>;
    static DECORATED_POT_PATTERN: ResourceKey<DecoratedPotPattern[]>;
    static DENSITY_FUNCTION: ResourceKey<DensityFunction[]>;
    static DENSITY_FUNCTION_TYPE: ResourceKey<MapCodec<DensityFunction>[]>;
    static DIALOG: ResourceKey<Dialog[]>;
    static DIALOG_ACTION_TYPE: ResourceKey<MapCodec<Action>[]>;
    static DIALOG_BODY_TYPE: ResourceKey<MapCodec<DialogBody>[]>;
    static DIALOG_TYPE: ResourceKey<MapCodec<Dialog>[]>;
    static DIMENSION: ResourceKey<Level[]>;
    static DIMENSION_TYPE: ResourceKey<DimensionType[]>;
    static ENCHANTMENT: ResourceKey<Enchantment[]>;
    static ENCHANTMENT_EFFECT_COMPONENT_TYPE: ResourceKey<DataComponentType<Object>[]>;
    static ENCHANTMENT_ENTITY_EFFECT_TYPE: ResourceKey<MapCodec<EnchantmentEntityEffect>[]>;
    static ENCHANTMENT_LEVEL_BASED_VALUE_TYPE: ResourceKey<MapCodec<LevelBasedValue>[]>;
    static ENCHANTMENT_LOCATION_BASED_EFFECT_TYPE: ResourceKey<MapCodec<EnchantmentLocationBasedEffect>[]>;
    static ENCHANTMENT_PROVIDER: ResourceKey<EnchantmentProvider[]>;
    static ENCHANTMENT_PROVIDER_TYPE: ResourceKey<MapCodec<EnchantmentProvider>[]>;
    static ENCHANTMENT_VALUE_EFFECT_TYPE: ResourceKey<MapCodec<EnchantmentValueEffect>[]>;
    static ENTITY_SUB_PREDICATE_TYPE: ResourceKey<MapCodec<EntitySubPredicate>[]>;
    static ENTITY_TYPE: ResourceKey<EntityType<any>[]>;
    static ENVIRONMENT_ATTRIBUTE: ResourceKey<EnvironmentAttribute<Object>[]>;
    static FEATURE: ResourceKey<Feature<any>[]>;
    static FEATURE_SIZE_TYPE: ResourceKey<FeatureSizeType<any>[]>;
    static FLAT_LEVEL_GENERATOR_PRESET: ResourceKey<FlatLevelGeneratorPreset[]>;
    static FLOAT_PROVIDER_TYPE: ResourceKey<MapCodec<FloatProvider>[]>;
    static FLUID: ResourceKey<Fluid[]>;
    static FOLIAGE_PLACER_TYPE: ResourceKey<FoliagePlacerType<any>[]>;
    static FROG_VARIANT: ResourceKey<FrogVariant[]>;
    static GAME_EVENT: ResourceKey<GameEvent[]>;
    static GAME_RULE: ResourceKey<GameRule<Object>[]>;
    static HEIGHT_PROVIDER_TYPE: ResourceKey<HeightProviderType<any>[]>;
    static INCOMING_RPC_METHOD: ResourceKey<IncomingRpcMethod<Object, Object>[]>;
    static INPUT_CONTROL_TYPE: ResourceKey<MapCodec<InputControl>[]>;
    static INSTRUMENT: ResourceKey<Instrument[]>;
    static INT_PROVIDER_TYPE: ResourceKey<MapCodec<IntProvider>[]>;
    static ITEM: ResourceKey<Item[]>;
    static ITEM_MODIFIER: ResourceKey<LootItemFunction[]>;
    static JUKEBOX_SONG: ResourceKey<JukeboxSong[]>;
    static LEVEL_STEM: ResourceKey<LevelStem[]>;
    static LOOT_CONDITION_TYPE: ResourceKey<MapCodec<LootItemCondition>[]>;
    static LOOT_FUNCTION_TYPE: ResourceKey<MapCodec<LootItemFunction>[]>;
    static LOOT_NBT_PROVIDER_TYPE: ResourceKey<MapCodec<NbtProvider>[]>;
    static LOOT_NUMBER_PROVIDER_TYPE: ResourceKey<MapCodec<NumberProvider>[]>;
    static LOOT_POOL_ENTRY_TYPE: ResourceKey<MapCodec<LootPoolEntryContainer>[]>;
    static LOOT_SCORE_PROVIDER_TYPE: ResourceKey<MapCodec<ScoreboardNameProvider>[]>;
    static LOOT_TABLE: ResourceKey<LootTable[]>;
    static MAP_DECORATION_TYPE: ResourceKey<MapDecorationType[]>;
    static MATERIAL_CONDITION: ResourceKey<MapCodec<SurfaceRules$ConditionSource>[]>;
    static MATERIAL_RULE: ResourceKey<MapCodec<SurfaceRules$RuleSource>[]>;
    static MEMORY_MODULE_TYPE: ResourceKey<MemoryModuleType<Object>[]>;
    static MENU: ResourceKey<MenuType<any>[]>;
    static MOB_EFFECT: ResourceKey<MobEffect[]>;
    static MULTI_NOISE_BIOME_SOURCE_PARAMETER_LIST: ResourceKey<MultiNoiseBiomeSourceParameterList[]>;
    static NOISE: ResourceKey<NormalNoise$NoiseParameters[]>;
    static NOISE_SETTINGS: ResourceKey<NoiseGeneratorSettings[]>;
    static NUMBER_FORMAT_TYPE: ResourceKey<NumberFormatType<any>[]>;
    static OUTGOING_RPC_METHOD: ResourceKey<OutgoingRpcMethod<Object, Object>[]>;
    static PAINTING_VARIANT: ResourceKey<PaintingVariant[]>;
    static PARTICLE_TYPE: ResourceKey<ParticleType<any>[]>;
    static PERMISSION_CHECK_TYPE: ResourceKey<MapCodec<PermissionCheck>[]>;
    static PERMISSION_TYPE: ResourceKey<MapCodec<Permission>[]>;
    static PIG_SOUND_VARIANT: ResourceKey<PigSoundVariant[]>;
    static PIG_VARIANT: ResourceKey<PigVariant[]>;
    static PLACED_FEATURE: ResourceKey<PlacedFeature[]>;
    static PLACEMENT_MODIFIER_TYPE: ResourceKey<PlacementModifierType<any>[]>;
    static POINT_OF_INTEREST_TYPE: ResourceKey<PoiType[]>;
    static POOL_ALIAS_BINDING: ResourceKey<MapCodec<PoolAliasBinding>[]>;
    static POSITION_SOURCE_TYPE: ResourceKey<PositionSourceType<any>[]>;
    static POS_RULE_TEST: ResourceKey<PosRuleTestType<any>[]>;
    static POTION: ResourceKey<Potion[]>;
    static PREDICATE: ResourceKey<LootItemCondition[]>;
    static PROCESSOR_LIST: ResourceKey<StructureProcessorList[]>;
    static RECIPE: ResourceKey<Recipe<any>[]>;
    static RECIPE_BOOK_CATEGORY: ResourceKey<RecipeBookCategory[]>;
    static RECIPE_DISPLAY: ResourceKey<RecipeDisplay$Type<any>[]>;
    static RECIPE_SERIALIZER: ResourceKey<RecipeSerializer<any>[]>;
    static RECIPE_TYPE: ResourceKey<RecipeType<any>[]>;
    static ROOT_PLACER_TYPE: ResourceKey<RootPlacerType<any>[]>;
    static ROOT_REGISTRY_NAME: Identifier;
    static RULE_BLOCK_ENTITY_MODIFIER: ResourceKey<RuleBlockEntityModifierType<any>[]>;
    static RULE_TEST: ResourceKey<RuleTestType<any>[]>;
    static SENSOR_TYPE: ResourceKey<SensorType<any>[]>;
    static SLOT_DISPLAY: ResourceKey<SlotDisplay$Type<any>[]>;
    static SLOT_SOURCE_TYPE: ResourceKey<MapCodec<SlotSource>[]>;
    static SOUND_EVENT: ResourceKey<SoundEvent[]>;
    static SPAWN_CONDITION_TYPE: ResourceKey<MapCodec<SpawnCondition>[]>;
    static STAT_TYPE: ResourceKey<Stat<Object>[][]>;
    static STRUCTURE: ResourceKey<Structure[]>;
    static STRUCTURE_PIECE: ResourceKey<StructurePieceType[]>;
    static STRUCTURE_PLACEMENT: ResourceKey<StructurePlacementType<any>[]>;
    static STRUCTURE_POOL_ELEMENT: ResourceKey<StructurePoolElementType<any>[]>;
    static STRUCTURE_PROCESSOR: ResourceKey<StructureProcessorType<any>[]>;
    static STRUCTURE_SET: ResourceKey<StructureSet[]>;
    static STRUCTURE_TYPE: ResourceKey<StructureType<any>[]>;
    static TEMPLATE_POOL: ResourceKey<StructureTemplatePool[]>;
    static TEST_ENVIRONMENT: ResourceKey<TestEnvironmentDefinition<Object>[]>;
    static TEST_ENVIRONMENT_DEFINITION_TYPE: ResourceKey<MapCodec<TestEnvironmentDefinition<Object>>[]>;
    static TEST_FUNCTION: ResourceKey<(param0: GameTestHelper) => void[]>;
    static TEST_INSTANCE: ResourceKey<GameTestInstance[]>;
    static TEST_INSTANCE_TYPE: ResourceKey<MapCodec<GameTestInstance>[]>;
    static TICKET_TYPE: ResourceKey<TicketType[]>;
    static TIMELINE: ResourceKey<Timeline[]>;
    static TRADE_SET: ResourceKey<TradeSet[]>;
    static TREE_DECORATOR_TYPE: ResourceKey<TreeDecoratorType<any>[]>;
    static TRIAL_SPAWNER_CONFIG: ResourceKey<TrialSpawnerConfig[]>;
    static TRIGGER_TYPE: ResourceKey<CriterionTrigger<any>[]>;
    static TRIM_MATERIAL: ResourceKey<TrimMaterial[]>;
    static TRIM_PATTERN: ResourceKey<TrimPattern[]>;
    static TRUNK_PLACER_TYPE: ResourceKey<TrunkPlacerType<any>[]>;
    static VILLAGER_PROFESSION: ResourceKey<VillagerProfession[]>;
    static VILLAGER_TRADE: ResourceKey<VillagerTrade[]>;
    static VILLAGER_TYPE: ResourceKey<VillagerType[]>;
    static WOLF_SOUND_VARIANT: ResourceKey<WolfSoundVariant[]>;
    static WOLF_VARIANT: ResourceKey<WolfVariant[]>;
    static WORLD_CLOCK: ResourceKey<WorldClock[]>;
    static WORLD_PRESET: ResourceKey<WorldPreset[]>;
    static ZOMBIE_NAUTILUS_VARIANT: ResourceKey<ZombieNautilusVariant[]>;
    static componentsDirPath(paramregistryKey: ResourceKey<Object[]>): string;
    static elementsDirPath(paramregistryKey: ResourceKey<Object[]>): string;
    static levelStemToLevel(paramlevelStem: ResourceKey<LevelStem>): ResourceKey<Level>;
    static levelToLevelStem(paramlevel: ResourceKey<Level>): ResourceKey<LevelStem>;
    static tagsDirPath(paramregistryKey: ResourceKey<Object[]>): string;
    constructor()
}