import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BuiltInRegistriesAccessor } from '../../../../net/fabricmc/fabric/mixin/registry/sync/BuiltInRegistriesAccessor.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { DataComponentInitializers } from '../../../../net/minecraft/core/component/DataComponentInitializers.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { TicketType } from '../../../../net/minecraft/server/level/TicketType.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { PoiType } from '../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { VillagerProfession } from '../../../../net/minecraft/world/entity/npc/villager/VillagerProfession.d.ts'
import type { VillagerType } from '../../../../net/minecraft/world/entity/npc/villager/VillagerType.d.ts'
import type { Activity } from '../../../../net/minecraft/world/entity/schedule/Activity.d.ts'
import type { CreativeModeTab } from '../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Potion } from '../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { RecipeBookCategory } from '../../../../net/minecraft/world/item/crafting/RecipeBookCategory.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { DecoratedPotPattern } from '../../../../net/minecraft/world/level/block/entity/DecoratedPotPattern.d.ts'
import type { ChunkStatus } from '../../../../net/minecraft/world/level/chunk/status/ChunkStatus.d.ts'
import type { GameEvent } from '../../../../net/minecraft/world/level/gameevent/GameEvent.d.ts'
import type { StructurePieceType } from '../../../../net/minecraft/world/level/levelgen/structure/pieces/StructurePieceType.d.ts'
import type { Fluid } from '../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { MapDecorationType } from '../../../../net/minecraft/world/level/saveddata/maps/MapDecorationType.d.ts'
export class BuiltInRegistries extends Object implements BuiltInRegistriesAccessor<Object> {
    static ACTIVITY: Activity[];
    static ATTRIBUTE: Attribute[];
    static ATTRIBUTE_TYPE: (Object | null)[];
    static BIOME_SOURCE: (Object | null)[];
    static BLOCK: Block[];
    static BLOCKSTATE_PROVIDER_TYPE: (Object | null)[];
    static BLOCK_ENTITY_TYPE: (Object | null)[];
    static BLOCK_PREDICATE_TYPE: (Object | null)[];
    static BLOCK_TYPE: (Object | null)[];
    static CARVER: (Object | null)[];
    static CHUNK_GENERATOR: (Object | null)[];
    static CHUNK_STATUS: ChunkStatus[];
    static COMMAND_ARGUMENT_TYPE: (Object | null)[];
    static CONSUME_EFFECT_TYPE: (Object | null)[];
    static CREATIVE_MODE_TAB: CreativeModeTab[];
    static CUSTOM_STAT: Identifier[];
    static DATA_COMPONENT_INITIALIZERS: DataComponentInitializers;
    static DATA_COMPONENT_PREDICATE_TYPE: (Object | null)[];
    static DATA_COMPONENT_TYPE: (Object | null)[];
    static DEBUG_SUBSCRIPTION: (Object | null)[];
    static DECORATED_POT_PATTERN: DecoratedPotPattern[];
    static DENSITY_FUNCTION_TYPE: (Object | null)[];
    static DIALOG_ACTION_TYPE: (Object | null)[];
    static DIALOG_BODY_TYPE: (Object | null)[];
    static DIALOG_TYPE: (Object | null)[];
    static ENCHANTMENT_EFFECT_COMPONENT_TYPE: (Object | null)[];
    static ENCHANTMENT_ENTITY_EFFECT_TYPE: (Object | null)[];
    static ENCHANTMENT_LEVEL_BASED_VALUE_TYPE: (Object | null)[];
    static ENCHANTMENT_LOCATION_BASED_EFFECT_TYPE: (Object | null)[];
    static ENCHANTMENT_PROVIDER_TYPE: (Object | null)[];
    static ENCHANTMENT_VALUE_EFFECT_TYPE: (Object | null)[];
    static ENTITY_SUB_PREDICATE_TYPE: (Object | null)[];
    static ENTITY_TYPE: (Object | null)[];
    static ENVIRONMENT_ATTRIBUTE: (Object | null)[];
    static FEATURE: (Object | null)[];
    static FEATURE_SIZE_TYPE: (Object | null)[];
    static FLOAT_PROVIDER_TYPE: (Object | null)[];
    static FLUID: Fluid[];
    static FOLIAGE_PLACER_TYPE: (Object | null)[];
    static GAME_EVENT: GameEvent[];
    static GAME_RULE: (Object | null)[];
    static HEIGHT_PROVIDER_TYPE: (Object | null)[];
    static INCOMING_RPC_METHOD: (Object | null)[];
    static INPUT_CONTROL_TYPE: (Object | null)[];
    static INT_PROVIDER_TYPE: (Object | null)[];
    static ITEM: Item[];
    static LOOT_CONDITION_TYPE: (Object | null)[];
    static LOOT_FUNCTION_TYPE: (Object | null)[];
    static LOOT_NBT_PROVIDER_TYPE: (Object | null)[];
    static LOOT_NUMBER_PROVIDER_TYPE: (Object | null)[];
    static LOOT_POOL_ENTRY_TYPE: (Object | null)[];
    static LOOT_SCORE_PROVIDER_TYPE: (Object | null)[];
    static MAP_DECORATION_TYPE: MapDecorationType[];
    static MATERIAL_CONDITION: (Object | null)[];
    static MATERIAL_RULE: (Object | null)[];
    static MEMORY_MODULE_TYPE: (Object | null)[];
    static MENU: (Object | null)[];
    static MOB_EFFECT: MobEffect[];
    static NUMBER_FORMAT_TYPE: (Object | null)[];
    static OUTGOING_RPC_METHOD: (Object | null)[];
    static PARTICLE_TYPE: (Object | null)[];
    static PERMISSION_CHECK_TYPE: (Object | null)[];
    static PERMISSION_TYPE: (Object | null)[];
    static PLACEMENT_MODIFIER_TYPE: (Object | null)[];
    static POINT_OF_INTEREST_TYPE: PoiType[];
    static POOL_ALIAS_BINDING_TYPE: (Object | null)[];
    static POSITION_SOURCE_TYPE: (Object | null)[];
    static POS_RULE_TEST: (Object | null)[];
    static POTION: Potion[];
    static RECIPE_BOOK_CATEGORY: RecipeBookCategory[];
    static RECIPE_DISPLAY: (Object | null)[];
    static RECIPE_SERIALIZER: (Object | null)[];
    static RECIPE_TYPE: (Object | null)[];
    static REGISTRY: (Object | null)[];
    static ROOT_PLACER_TYPE: (Object | null)[];
    static RULE_BLOCK_ENTITY_MODIFIER: (Object | null)[];
    static RULE_TEST: (Object | null)[];
    static SENSOR_TYPE: (Object | null)[];
    static SLOT_DISPLAY: (Object | null)[];
    static SLOT_SOURCE_TYPE: (Object | null)[];
    static SOUND_EVENT: SoundEvent[];
    static SPAWN_CONDITION_TYPE: (Object | null)[];
    static STAT_TYPE: (Object | null)[];
    static STRUCTURE_PIECE: StructurePieceType[];
    static STRUCTURE_PLACEMENT: (Object | null)[];
    static STRUCTURE_POOL_ELEMENT: (Object | null)[];
    static STRUCTURE_PROCESSOR: (Object | null)[];
    static STRUCTURE_TYPE: (Object | null)[];
    static TEST_ENVIRONMENT_DEFINITION_TYPE: (Object | null)[];
    static TEST_FUNCTION: (Object | null)[];
    static TEST_INSTANCE_TYPE: (Object | null)[];
    static TICKET_TYPE: TicketType[];
    static TREE_DECORATOR_TYPE: (Object | null)[];
    static TRIGGER_TYPES: (Object | null)[];
    static TRUNK_PLACER_TYPE: (Object | null)[];
    static VILLAGER_PROFESSION: VillagerProfession[];
    static VILLAGER_TYPE: VillagerType[];
    static acquireBootstrapRegistrationLookup(paramregistry: (Object | null)[]): HolderGetter<Object>;
    static bootStrap(): void;
    static createContents(): void;
    static getWRITABLE_REGISTRY(): (Object | null)[];
    constructor()
}