import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../../com/mojang/serialization/Keyable.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
import type { ItemAttributeModifiers$Display } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Display.d.ts'
export class ItemAttributeModifiers$Display$Type extends Enum<ItemAttributeModifiers$Display$Type> implements StringRepresentable {
    static DEFAULT: ItemAttributeModifiers$Display$Type;
    static HIDDEN: ItemAttributeModifiers$Display$Type;
    static OVERRIDE: ItemAttributeModifiers$Display$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static createNameLookup(paramvalueArray: Object | null): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: Object | null, paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => Object | null): StringRepresentable$EnumCodec<Object>;
    static fromEnumWithMapping(paramvalues: () => Object | null, paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<Object>;
    static fromValues(paramvalues: () => Object | null): Codec<StringRepresentable>;
    static keys(paramvalues: (Object | null)[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ItemAttributeModifiers$Display$Type;
    static values(): (Object | null)[];
    private constructor(name: string, id: number, codec: MapCodec<ItemAttributeModifiers$Display>, streamCodec: StreamCodec<RegistryFriendlyByteBuf, ItemAttributeModifiers$Display>)
    // private codec: MapCodec<ItemAttributeModifiers$Display>;
    // private id: number;
    // private name: string;
    // private streamCodec: StreamCodec<RegistryFriendlyByteBuf, ItemAttributeModifiers$Display>;
    getSerializedName(): string;
    // private id(): number;
    // private streamCodec(): StreamCodec<RegistryFriendlyByteBuf, ItemAttributeModifiers$Display>;
    name(): "DEFAULT" | "HIDDEN" | "OVERRIDE";
}