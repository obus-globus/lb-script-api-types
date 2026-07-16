import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityTypes1_9$EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_9$EntityType.d.ts'
import type { EntityDataTypes1_8 } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_8.d.ts'
import type { EntityDataTypes1_9 } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_9.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EntityDataIndex1_9 extends Enum<EntityDataIndex1_9> {
    static ABSTRACT_AGEABLE_AGE: EntityDataIndex1_9;
    static ABSTRACT_MINECART_BLOCK: EntityDataIndex1_9;
    static ABSTRACT_MINECART_BLOCK_Y: EntityDataIndex1_9;
    static ABSTRACT_MINECART_DAMAGE_TAKEN: EntityDataIndex1_9;
    static ABSTRACT_MINECART_SHAKING_DIRECTION: EntityDataIndex1_9;
    static ABSTRACT_MINECART_SHAKING_POWER: EntityDataIndex1_9;
    static ABSTRACT_MINECART_SHOW_BLOCK: EntityDataIndex1_9;
    static ARMOR_STAND_BODY_POS: EntityDataIndex1_9;
    static ARMOR_STAND_HEAD_POS: EntityDataIndex1_9;
    static ARMOR_STAND_INFO: EntityDataIndex1_9;
    static ARMOR_STAND_LA_POS: EntityDataIndex1_9;
    static ARMOR_STAND_LL_POS: EntityDataIndex1_9;
    static ARMOR_STAND_RA_POS: EntityDataIndex1_9;
    static ARMOR_STAND_RL_POS: EntityDataIndex1_9;
    static ARROW_IS_CRIT: EntityDataIndex1_9;
    static BAT_IS_HANGING: EntityDataIndex1_9;
    static BLAZE_ON_FIRE: EntityDataIndex1_9;
    static BOAT_DAMAGE_TAKEN: EntityDataIndex1_9;
    static BOAT_FORWARD_DIRECTION: EntityDataIndex1_9;
    static BOAT_SINCE_HIT: EntityDataIndex1_9;
    static COMMAND_BLOCK_MINECART_COMMAND: EntityDataIndex1_9;
    static COMMAND_BLOCK_MINECART_OUTPUT: EntityDataIndex1_9;
    static CREEPER_FUSE: EntityDataIndex1_9;
    static CREEPER_IS_IGNITED: EntityDataIndex1_9;
    static CREEPER_IS_POWERED: EntityDataIndex1_9;
    static ENDERMAN_BLOCK_DATA: EntityDataIndex1_9;
    static ENDERMAN_BLOCK_STATE: EntityDataIndex1_9;
    static ENDERMAN_IS_SCREAMING: EntityDataIndex1_9;
    static ENDER_DRAGON_PHASE: EntityDataIndex1_9;
    static END_CRYSTAL_HEALTH: EntityDataIndex1_9;
    static ENTITY_AIR: EntityDataIndex1_9;
    static ENTITY_ALWAYS_SHOW_NAMETAG: EntityDataIndex1_9;
    static ENTITY_NAMETAG: EntityDataIndex1_9;
    static ENTITY_SILENT: EntityDataIndex1_9;
    static ENTITY_STATUS: EntityDataIndex1_9;
    static FIREWORK_ROCKET_INFO: EntityDataIndex1_9;
    static FURNACE_MINECART_IS_POWERED: EntityDataIndex1_9;
    static GHAST_IS_ATTACKING: EntityDataIndex1_9;
    static GUARDIAN_INFO: EntityDataIndex1_9;
    static GUARDIAN_TARGET: EntityDataIndex1_9;
    static HORSE_ARMOR: EntityDataIndex1_9;
    static HORSE_INFO: EntityDataIndex1_9;
    static HORSE_OWNER: EntityDataIndex1_9;
    static HORSE_SUBTYPE: EntityDataIndex1_9;
    static HORSE_TYPE: EntityDataIndex1_9;
    static IRON_GOLEM_PLAYER_MADE: EntityDataIndex1_9;
    static ITEM_FRAME_ITEM: EntityDataIndex1_9;
    static ITEM_FRAME_ROTATION: EntityDataIndex1_9;
    static ITEM_ITEM: EntityDataIndex1_9;
    static LIVING_ENTITY_BASE_HEALTH: EntityDataIndex1_9;
    static LIVING_ENTITY_BASE_IS_POTION_AMBIENT: EntityDataIndex1_9;
    static LIVING_ENTITY_BASE_NUMBER_OF_ARROWS_IN: EntityDataIndex1_9;
    static LIVING_ENTITY_BASE_POTION_EFFECT_COLOR: EntityDataIndex1_9;
    static LIVING_ENTITY_NO_AI: EntityDataIndex1_9;
    static OCELOT_TYPE: EntityDataIndex1_9;
    static PIG_SADDLE: EntityDataIndex1_9;
    static PLAYER_ADDITIONAL_HEARTS: EntityDataIndex1_9;
    static PLAYER_BYTE: EntityDataIndex1_9;
    static PLAYER_HAND: EntityDataIndex1_9;
    static PLAYER_SCORE: EntityDataIndex1_9;
    static PLAYER_SKIN_FLAGS: EntityDataIndex1_9;
    static RABBIT_TYPE: EntityDataIndex1_9;
    static SHEEP_COLOR: EntityDataIndex1_9;
    static SKELETON_TYPE: EntityDataIndex1_9;
    static SLIME_SIZE: EntityDataIndex1_9;
    static SPIDER_CLIMBING: EntityDataIndex1_9;
    static TAMABLE_ANIMAL_ANIMAL_INFO: EntityDataIndex1_9;
    static TAMABLE_ANIMAL_ANIMAL_OWNER: EntityDataIndex1_9;
    static VILLAGER_PROFESSION: EntityDataIndex1_9;
    static WITCH_AGGRESSIVE: EntityDataIndex1_9;
    static WITHER_INVULNERABILITY_TIME: EntityDataIndex1_9;
    static WITHER_SKULL_INVULNERABILITY: EntityDataIndex1_9;
    static WITHER_TARGET1: EntityDataIndex1_9;
    static WITHER_TARGET2: EntityDataIndex1_9;
    static WITHER_TARGET3: EntityDataIndex1_9;
    static WOLF_BEGGING: EntityDataIndex1_9;
    static WOLF_COLLAR: EntityDataIndex1_9;
    static WOLF_HEALTH: EntityDataIndex1_9;
    static ZOMBIE_IS_CHILD: EntityDataIndex1_9;
    static ZOMBIE_IS_CONVERTING: EntityDataIndex1_9;
    static ZOMBIE_IS_VILLAGER: EntityDataIndex1_9;
    static searchIndex(paramarg0: EntityType, paramarg1: number): EntityDataIndex1_9;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EntityDataIndex1_9;
    static values(): EntityDataIndex1_9[];
    private constructor(arg2: EntityTypes1_9$EntityType, arg3: number, arg4: EntityDataTypes1_8, arg5: EntityDataTypes1_9)
    private constructor(arg2: EntityTypes1_9$EntityType, arg3: number, arg4: EntityDataTypes1_8, arg5: number, arg6: EntityDataTypes1_9)
    private constructor(arg2: EntityTypes1_9$EntityType, arg3: number, arg4: EntityDataTypes1_9)
    readonly clazz: EntityTypes1_9$EntityType;
    readonly index: number;
    readonly newIndex: number;
    readonly newType: EntityDataTypes1_9;
    readonly oldType: EntityDataTypes1_8;
    getClazz(): EntityTypes1_9$EntityType;
    getIndex(): number;
    getNewIndex(): number;
    getNewType(): EntityDataTypes1_9;
    getOldType(): EntityDataTypes1_8;
    name(): "ENTITY_STATUS" | "ENTITY_AIR" | "ENTITY_NAMETAG" | "ENTITY_ALWAYS_SHOW_NAMETAG" | "ENTITY_SILENT" | "LIVING_ENTITY_BASE_HEALTH" | "LIVING_ENTITY_BASE_POTION_EFFECT_COLOR" | "LIVING_ENTITY_BASE_IS_POTION_AMBIENT" | "LIVING_ENTITY_BASE_NUMBER_OF_ARROWS_IN" | "LIVING_ENTITY_NO_AI" | "ABSTRACT_AGEABLE_AGE" | "ARMOR_STAND_INFO" | "ARMOR_STAND_HEAD_POS" | "ARMOR_STAND_BODY_POS" | "ARMOR_STAND_LA_POS" | "ARMOR_STAND_RA_POS" | "ARMOR_STAND_LL_POS" | "ARMOR_STAND_RL_POS" | "PLAYER_SKIN_FLAGS" | "PLAYER_BYTE" | "PLAYER_ADDITIONAL_HEARTS" | "PLAYER_SCORE" | "PLAYER_HAND" | "HORSE_INFO" | "HORSE_TYPE" | "HORSE_SUBTYPE" | "HORSE_OWNER" | "HORSE_ARMOR" | "BAT_IS_HANGING" | "TAMABLE_ANIMAL_ANIMAL_INFO" | "TAMABLE_ANIMAL_ANIMAL_OWNER" | "OCELOT_TYPE" | "WOLF_HEALTH" | "WOLF_BEGGING" | "WOLF_COLLAR" | "PIG_SADDLE" | "RABBIT_TYPE" | "SHEEP_COLOR" | "VILLAGER_PROFESSION" | "ENDERMAN_BLOCK_STATE" | "ENDERMAN_BLOCK_DATA" | "ENDERMAN_IS_SCREAMING" | "ZOMBIE_IS_CHILD" | "ZOMBIE_IS_VILLAGER" | "ZOMBIE_IS_CONVERTING" | "BLAZE_ON_FIRE" | "SPIDER_CLIMBING" | "CREEPER_FUSE" | "CREEPER_IS_POWERED" | "CREEPER_IS_IGNITED" | "GHAST_IS_ATTACKING" | "SLIME_SIZE" | "SKELETON_TYPE" | "WITCH_AGGRESSIVE" | "IRON_GOLEM_PLAYER_MADE" | "WITHER_TARGET1" | "WITHER_TARGET2" | "WITHER_TARGET3" | "WITHER_INVULNERABILITY_TIME" | "WITHER_SKULL_INVULNERABILITY" | "GUARDIAN_INFO" | "GUARDIAN_TARGET" | "BOAT_SINCE_HIT" | "BOAT_FORWARD_DIRECTION" | "BOAT_DAMAGE_TAKEN" | "ABSTRACT_MINECART_SHAKING_POWER" | "ABSTRACT_MINECART_SHAKING_DIRECTION" | "ABSTRACT_MINECART_DAMAGE_TAKEN" | "ABSTRACT_MINECART_BLOCK" | "ABSTRACT_MINECART_BLOCK_Y" | "ABSTRACT_MINECART_SHOW_BLOCK" | "COMMAND_BLOCK_MINECART_COMMAND" | "COMMAND_BLOCK_MINECART_OUTPUT" | "FURNACE_MINECART_IS_POWERED" | "ITEM_ITEM" | "ARROW_IS_CRIT" | "FIREWORK_ROCKET_INFO" | "ITEM_FRAME_ITEM" | "ITEM_FRAME_ROTATION" | "END_CRYSTAL_HEALTH" | "ENDER_DRAGON_PHASE";
}