import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { EntityDataTypes1_6_4 } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_6_4tor1_7_2_5/types/EntityDataTypes1_6_4.d.ts'
export class EntityDataIndex1_5_2 extends Enum<EntityDataIndex1_5_2> {
    static BOAT_DAMAGE_TAKEN: EntityDataIndex1_5_2;
    static ENDER_DRAGON_HEALTH: EntityDataIndex1_5_2;
    static ENTITY_LIVING_ARROWS: EntityDataIndex1_5_2;
    static ENTITY_LIVING_IS_POTION_EFFECT_AMBIENT: EntityDataIndex1_5_2;
    static ENTITY_LIVING_NAME_TAG: EntityDataIndex1_5_2;
    static ENTITY_LIVING_NAME_TAG_VISIBILITY: EntityDataIndex1_5_2;
    static ENTITY_LIVING_POTION_EFFECT_COLOR: EntityDataIndex1_5_2;
    static HUMAN_ABSORPTION_HEARTS: EntityDataIndex1_5_2;
    static MINECART_DAMAGE_TAKEN: EntityDataIndex1_5_2;
    static WITHER_HEALTH: EntityDataIndex1_5_2;
    static WOLF_HEALTH: EntityDataIndex1_5_2;
    static searchIndex(paramarg0: EntityTypes1_8$EntityType, paramarg1: number): EntityDataIndex1_5_2;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EntityDataIndex1_5_2;
    static values(): EntityDataIndex1_5_2[];
    private constructor(arg2: EntityTypes1_8$EntityType, arg3: number, arg4: EntityDataTypes1_6_4, arg5: number, arg6: EntityDataTypes1_6_4)
    private constructor(arg2: EntityTypes1_8$EntityType, arg3: number, arg4: EntityDataTypes1_6_4, arg5: EntityDataTypes1_6_4)
    readonly entityType: EntityTypes1_8$EntityType;
    readonly newIndex: number;
    readonly newType: EntityDataTypes1_6_4;
    readonly oldIndex: number;
    readonly oldType: EntityDataTypes1_6_4;
    getEntityType(): EntityTypes1_8$EntityType;
    getNewIndex(): number;
    getNewType(): EntityDataTypes1_6_4;
    getOldIndex(): number;
    getOldType(): EntityDataTypes1_6_4;
    name(): "ENTITY_LIVING_POTION_EFFECT_COLOR" | "ENTITY_LIVING_IS_POTION_EFFECT_AMBIENT" | "ENTITY_LIVING_ARROWS" | "ENTITY_LIVING_NAME_TAG" | "ENTITY_LIVING_NAME_TAG_VISIBILITY" | "HUMAN_ABSORPTION_HEARTS" | "BOAT_DAMAGE_TAKEN" | "MINECART_DAMAGE_TAKEN" | "WITHER_HEALTH" | "ENDER_DRAGON_HEALTH" | "WOLF_HEALTH";
}