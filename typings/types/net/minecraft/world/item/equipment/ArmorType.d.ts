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
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
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