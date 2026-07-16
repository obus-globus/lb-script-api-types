import type { EntityTypes1_9$EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_9$EntityType.d.ts'
import type { ObjectType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/ObjectType.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EntityTypes1_9$ObjectType extends Enum<EntityTypes1_9$ObjectType> implements ObjectType {
    static AREA_EFFECT_CLOUD: EntityTypes1_9$ObjectType;
    static ARMOR_STAND: EntityTypes1_9$ObjectType;
    static BOAT: EntityTypes1_9$ObjectType;
    static CHEST_MINECART: EntityTypes1_9$ObjectType;
    static COMMAND_BLOCK_MINECART: EntityTypes1_9$ObjectType;
    static DRAGON_FIREBALL: EntityTypes1_9$ObjectType;
    static EGG: EntityTypes1_9$ObjectType;
    static ENDER_CRYSTAL: EntityTypes1_9$ObjectType;
    static ENDER_PEARL: EntityTypes1_9$ObjectType;
    static EXPERIENCE_BOTTLE: EntityTypes1_9$ObjectType;
    static EYE_OF_ENDER: EntityTypes1_9$ObjectType;
    static FALLING_BLOCK: EntityTypes1_9$ObjectType;
    static FIREBALL: EntityTypes1_9$ObjectType;
    static FIREWORK_ROCKET: EntityTypes1_9$ObjectType;
    static FISHIHNG_HOOK: EntityTypes1_9$ObjectType;
    static FURNACE_MINECART: EntityTypes1_9$ObjectType;
    static HOPPER_MINECART: EntityTypes1_9$ObjectType;
    static ITEM: EntityTypes1_9$ObjectType;
    static ITEM_FRAME: EntityTypes1_9$ObjectType;
    static LEASH: EntityTypes1_9$ObjectType;
    static MINECART: EntityTypes1_9$ObjectType;
    static POTION: EntityTypes1_9$ObjectType;
    static SHULKER_BULLET: EntityTypes1_9$ObjectType;
    static SMALL_FIREBALL: EntityTypes1_9$ObjectType;
    static SNOWBALL: EntityTypes1_9$ObjectType;
    static SPAWNER_MINECART: EntityTypes1_9$ObjectType;
    static SPECTRAL_ARROW: EntityTypes1_9$ObjectType;
    static TIPPED_ARROW: EntityTypes1_9$ObjectType;
    static TNT_MINECART: EntityTypes1_9$ObjectType;
    static TNT_PRIMED: EntityTypes1_9$ObjectType;
    static WITHER_SKULL: EntityTypes1_9$ObjectType;
    static findById(paramarg0: number, paramarg1: number): EntityTypes1_9$ObjectType;
    static getEntityType(paramarg0: number, paramarg1: number): EntityTypes1_9$EntityType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): EntityTypes1_9$ObjectType;
    static values(): EntityTypes1_9$ObjectType[];
    private constructor(arg2: number, arg3: EntityTypes1_9$EntityType)
    private constructor(arg2: number, arg3: number, arg4: EntityTypes1_9$EntityType)
    readonly data: number;
    readonly id: number;
    readonly type: EntityTypes1_9$EntityType;
    getData(): number;
    getId(): number;
    getType(): EntityTypes1_9$EntityType;
    name(): "BOAT" | "ITEM" | "AREA_EFFECT_CLOUD" | "MINECART" | "CHEST_MINECART" | "FURNACE_MINECART" | "TNT_MINECART" | "SPAWNER_MINECART" | "HOPPER_MINECART" | "COMMAND_BLOCK_MINECART" | "TNT_PRIMED" | "ENDER_CRYSTAL" | "TIPPED_ARROW" | "SNOWBALL" | "EGG" | "FIREBALL" | "SMALL_FIREBALL" | "ENDER_PEARL" | "WITHER_SKULL" | "SHULKER_BULLET" | "FALLING_BLOCK" | "ITEM_FRAME" | "EYE_OF_ENDER" | "POTION" | "EXPERIENCE_BOTTLE" | "FIREWORK_ROCKET" | "LEASH" | "ARMOR_STAND" | "FISHIHNG_HOOK" | "SPECTRAL_ARROW" | "DRAGON_FIREBALL";
}