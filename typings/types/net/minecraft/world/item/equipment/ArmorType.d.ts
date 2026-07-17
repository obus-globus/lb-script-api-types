import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorType extends Enum<ArmorType> implements StringRepresentable {
    static BODY: ArmorType;
    static BOOTS: ArmorType;
    static CHESTPLATE: ArmorType;
    static CODEC: Codec<ArmorType>;
    static HELMET: ArmorType;
    static LEGGINGS: ArmorType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ArmorType;
    static values(): ArmorType[];
    private constructor(slot: EquipmentSlot, unitDurability: number, name: string)
    readonly slot: EquipmentSlot;
    // private unitDurability: number;
    getDurability(multiplier: number): number;
    getName(): string;
    getSerializedName(): string;
    getSlot(): EquipmentSlot;
    name(): "HELMET" | "CHESTPLATE" | "LEGGINGS" | "BOOTS" | "BODY";
}