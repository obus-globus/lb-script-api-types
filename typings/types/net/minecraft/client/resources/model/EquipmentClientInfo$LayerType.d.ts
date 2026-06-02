import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class EquipmentClientInfo$LayerType extends Enum<EquipmentClientInfo$LayerType> implements StringRepresentable {
    static CAMEL_HUSK_SADDLE: EquipmentClientInfo$LayerType;
    static CAMEL_SADDLE: EquipmentClientInfo$LayerType;
    static CODEC: Codec<EquipmentClientInfo$LayerType>;
    static DONKEY_SADDLE: EquipmentClientInfo$LayerType;
    static HAPPY_GHAST_BODY: EquipmentClientInfo$LayerType;
    static HORSE_BODY: EquipmentClientInfo$LayerType;
    static HORSE_SADDLE: EquipmentClientInfo$LayerType;
    static HUMANOID: EquipmentClientInfo$LayerType;
    static HUMANOID_BABY: EquipmentClientInfo$LayerType;
    static HUMANOID_LEGGINGS: EquipmentClientInfo$LayerType;
    static LLAMA_BODY: EquipmentClientInfo$LayerType;
    static MULE_SADDLE: EquipmentClientInfo$LayerType;
    static NAUTILUS_BODY: EquipmentClientInfo$LayerType;
    static NAUTILUS_SADDLE: EquipmentClientInfo$LayerType;
    static PIG_SADDLE: EquipmentClientInfo$LayerType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SKELETON_HORSE_SADDLE: EquipmentClientInfo$LayerType;
    static STRIDER_SADDLE: EquipmentClientInfo$LayerType;
    static WINGS: EquipmentClientInfo$LayerType;
    static WOLF_BODY: EquipmentClientInfo$LayerType;
    static ZOMBIE_HORSE_SADDLE: EquipmentClientInfo$LayerType;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => Object | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<Object>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): EquipmentClientInfo$LayerType;
    static values(): (Object | null)[];
    private constructor(id: string)
    // private id: string;
    getSerializedName(): string;
    trimAssetPrefix(): string;
    name(): "HUMANOID" | "HUMANOID_LEGGINGS" | "HUMANOID_BABY" | "WINGS" | "WOLF_BODY" | "HORSE_BODY" | "LLAMA_BODY" | "PIG_SADDLE" | "STRIDER_SADDLE" | "CAMEL_SADDLE" | "CAMEL_HUSK_SADDLE" | "HORSE_SADDLE" | "DONKEY_SADDLE" | "MULE_SADDLE" | "ZOMBIE_HORSE_SADDLE" | "SKELETON_HORSE_SADDLE" | "HAPPY_GHAST_BODY" | "NAUTILUS_SADDLE" | "NAUTILUS_BODY";
}