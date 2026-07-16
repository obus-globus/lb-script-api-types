import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
export class ArmorType extends Enum<ArmorType> implements StringRepresentable {
    static BODY: ArmorType;
    static BOOTS: ArmorType;
    static CHESTPLATE: ArmorType;
    static CODEC: Codec<ArmorType>;
    static HELMET: ArmorType;
    static LEGGINGS: ArmorType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup<T extends StringRepresentable>(paramvalueArray: T[]): (param0: string) => T;
    static createNameLookup<T extends unknown>(paramvalueArray: T[], paramconverter: (param0: T) => string): (param0: string) => T;
    static fromEnum<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[]): StringRepresentable$EnumCodec<E>;
    static fromEnumWithMapping<E extends Enum<E> & StringRepresentable>(paramvalues: () => E[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<E>;
    static fromValues<T extends StringRepresentable>(paramvalues: () => T[]): Codec<T>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
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