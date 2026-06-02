import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { EntityDataTypes1_8 } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_8.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { EntityDataTypes1_7_6 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_7_6_10tor1_8/types/EntityDataTypes1_7_6.d.ts'
export class EntityDataIndex1_7_6 extends Enum<EntityDataIndex1_7_6> {
    static ARROW_IS_CRITICAL: EntityDataIndex1_7_6;
    static BAT_HANGING: EntityDataIndex1_7_6;
    static BLAZE_ON_FIRE: EntityDataIndex1_7_6;
    static BOAT_DAMAGE_TAKEN: EntityDataIndex1_7_6;
    static BOAT_FORWARD_DIRECTION: EntityDataIndex1_7_6;
    static BOAT_TIME_SINCE_HIT: EntityDataIndex1_7_6;
    static CREEPER_ISIGNITED: EntityDataIndex1_7_6;
    static CREEPER_POWERED: EntityDataIndex1_7_6;
    static CREEPER_STATE: EntityDataIndex1_7_6;
    static ENDERMAN_CARRIED_BLOCK: EntityDataIndex1_7_6;
    static ENDERMAN_CARRIED_BLOCK_DATA: EntityDataIndex1_7_6;
    static ENDERMAN_IS_SCREAMING: EntityDataIndex1_7_6;
    static ENDER_CRYSTAL_HEALTH: EntityDataIndex1_7_6;
    static ENTITY_AGEABLE_AGE: EntityDataIndex1_7_6;
    static ENTITY_AIR: EntityDataIndex1_7_6;
    static ENTITY_FLAGS: EntityDataIndex1_7_6;
    static ENTITY_LIVING_ARROWS: EntityDataIndex1_7_6;
    static ENTITY_LIVING_HEALTH: EntityDataIndex1_7_6;
    static ENTITY_LIVING_IS_POTION_EFFECT_AMBIENT: EntityDataIndex1_7_6;
    static ENTITY_LIVING_NAME_TAG: EntityDataIndex1_7_6;
    static ENTITY_LIVING_NAME_TAG_VISIBILITY: EntityDataIndex1_7_6;
    static ENTITY_LIVING_POTION_EFFECT_COLOR: EntityDataIndex1_7_6;
    static FIREWORK_INFO: EntityDataIndex1_7_6;
    static FURNACE_MINECART_IS_POWERED: EntityDataIndex1_7_6;
    static GHAST_IS_POWERED: EntityDataIndex1_7_6;
    static GHAST_STATE: EntityDataIndex1_7_6;
    static GUARDIAN_FLAGS: EntityDataIndex1_7_6;
    static GUARDIAN_TARGET: EntityDataIndex1_7_6;
    static HORSE_ARMOR: EntityDataIndex1_7_6;
    static HORSE_COLOR: EntityDataIndex1_7_6;
    static HORSE_FLAGS: EntityDataIndex1_7_6;
    static HORSE_OWNER: EntityDataIndex1_7_6;
    static HORSE_TYPE: EntityDataIndex1_7_6;
    static HUMAN_ABSORPTION_HEARTS: EntityDataIndex1_7_6;
    static HUMAN_SCORE: EntityDataIndex1_7_6;
    static HUMAN_SKIN_FLAGS: EntityDataIndex1_7_6;
    static IRON_GOLEM_IS_PLAYER_CREATED: EntityDataIndex1_7_6;
    static ITEM_FRAME_ITEM: EntityDataIndex1_7_6;
    static ITEM_FRAME_ROTATION: EntityDataIndex1_7_6;
    static ITEM_ITEM: EntityDataIndex1_7_6;
    static MINECART_BLOCK_INSIDE: EntityDataIndex1_7_6;
    static MINECART_BLOCK_Y: EntityDataIndex1_7_6;
    static MINECART_DAMAGE_TAKEN: EntityDataIndex1_7_6;
    static MINECART_SHAKING_DIRECTION: EntityDataIndex1_7_6;
    static MINECART_SHAKING_POWER: EntityDataIndex1_7_6;
    static MINECART_SHOW_BLOCK: EntityDataIndex1_7_6;
    static OCELOT_TYPE: EntityDataIndex1_7_6;
    static PIG_SADDLE: EntityDataIndex1_7_6;
    static SHEEP_COLOR_OR_SHEARED: EntityDataIndex1_7_6;
    static SKELETON_TYPE: EntityDataIndex1_7_6;
    static SLIME_SIZE: EntityDataIndex1_7_6;
    static SPIDER_CLIMBING: EntityDataIndex1_7_6;
    static TAMEABLE_FLAGS: EntityDataIndex1_7_6;
    static TAMEABLE_OWNER: EntityDataIndex1_7_6;
    static VILLAGER_TYPE: EntityDataIndex1_7_6;
    static WITCH_AGRESSIVE: EntityDataIndex1_7_6;
    static WITHER_INVULNERABLE_TIME: EntityDataIndex1_7_6;
    static WITHER_SKULL_ISINVULNERABLE: EntityDataIndex1_7_6;
    static WITHER_WATCHED_TAGRET_1: EntityDataIndex1_7_6;
    static WITHER_WATCHED_TAGRET_2: EntityDataIndex1_7_6;
    static WITHER_WATCHED_TAGRET_3: EntityDataIndex1_7_6;
    static WOLF_BEGGING: EntityDataIndex1_7_6;
    static WOLF_COLLAR_COLOR: EntityDataIndex1_7_6;
    static WOLF_HEALTH: EntityDataIndex1_7_6;
    static ZOMBIE_CHILD: EntityDataIndex1_7_6;
    static ZOMBIE_CONVERTING: EntityDataIndex1_7_6;
    static ZOMBIE_VILLAGER: EntityDataIndex1_7_6;
    static searchIndex(paramarg0: EntityTypes1_8$EntityType, paramarg1: number): EntityDataIndex1_7_6;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): EntityDataIndex1_7_6;
    static values(): (Object | null)[];
    private constructor(arg2: EntityTypes1_8$EntityType, arg3: number, arg4: EntityDataTypes1_7_6, arg5: EntityDataTypes1_8)
    private constructor(arg2: EntityTypes1_8$EntityType, arg3: number, arg4: EntityDataTypes1_7_6, arg5: number, arg6: EntityDataTypes1_8)
    readonly entityType: EntityTypes1_8$EntityType;
    readonly newIndex: number;
    readonly newType: EntityDataTypes1_8;
    readonly oldIndex: number;
    readonly oldType: EntityDataTypes1_7_6;
    getEntityType(): EntityTypes1_8$EntityType;
    getNewIndex(): number;
    getNewType(): EntityDataTypes1_8;
    getOldIndex(): number;
    getOldType(): EntityDataTypes1_7_6;
    name(): "ENTITY_FLAGS" | "ENTITY_AIR" | "ENTITY_LIVING_HEALTH" | "ENTITY_LIVING_POTION_EFFECT_COLOR" | "ENTITY_LIVING_IS_POTION_EFFECT_AMBIENT" | "ENTITY_LIVING_ARROWS" | "ENTITY_LIVING_NAME_TAG" | "ENTITY_LIVING_NAME_TAG_VISIBILITY" | "ENTITY_AGEABLE_AGE" | "HUMAN_SKIN_FLAGS" | "HUMAN_ABSORPTION_HEARTS" | "HUMAN_SCORE" | "HORSE_FLAGS" | "HORSE_TYPE" | "HORSE_COLOR" | "HORSE_OWNER" | "HORSE_ARMOR" | "BAT_HANGING" | "TAMEABLE_FLAGS" | "TAMEABLE_OWNER" | "OCELOT_TYPE" | "WOLF_HEALTH" | "WOLF_BEGGING" | "WOLF_COLLAR_COLOR" | "PIG_SADDLE" | "SHEEP_COLOR_OR_SHEARED" | "VILLAGER_TYPE" | "ENDERMAN_CARRIED_BLOCK" | "ENDERMAN_CARRIED_BLOCK_DATA" | "ENDERMAN_IS_SCREAMING" | "ZOMBIE_CHILD" | "ZOMBIE_VILLAGER" | "ZOMBIE_CONVERTING" | "BLAZE_ON_FIRE" | "SPIDER_CLIMBING" | "CREEPER_STATE" | "CREEPER_POWERED" | "CREEPER_ISIGNITED" | "GHAST_STATE" | "GHAST_IS_POWERED" | "SLIME_SIZE" | "SKELETON_TYPE" | "WITCH_AGRESSIVE" | "IRON_GOLEM_IS_PLAYER_CREATED" | "WITHER_WATCHED_TAGRET_1" | "WITHER_WATCHED_TAGRET_2" | "WITHER_WATCHED_TAGRET_3" | "WITHER_INVULNERABLE_TIME" | "WITHER_SKULL_ISINVULNERABLE" | "GUARDIAN_FLAGS" | "GUARDIAN_TARGET" | "BOAT_TIME_SINCE_HIT" | "BOAT_FORWARD_DIRECTION" | "BOAT_DAMAGE_TAKEN" | "MINECART_SHAKING_POWER" | "MINECART_SHAKING_DIRECTION" | "MINECART_DAMAGE_TAKEN" | "MINECART_BLOCK_INSIDE" | "MINECART_BLOCK_Y" | "MINECART_SHOW_BLOCK" | "FURNACE_MINECART_IS_POWERED" | "ITEM_ITEM" | "ARROW_IS_CRITICAL" | "FIREWORK_INFO" | "ITEM_FRAME_ITEM" | "ITEM_FRAME_ROTATION" | "ENDER_CRYSTAL_HEALTH";
}