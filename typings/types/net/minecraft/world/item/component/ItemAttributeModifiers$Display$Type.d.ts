import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { ItemAttributeModifiers$Display } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Display.d.ts'
export class ItemAttributeModifiers$Display$Type extends Enum<ItemAttributeModifiers$Display$Type> implements StringRepresentable {
    static DEFAULT: ItemAttributeModifiers$Display$Type;
    static HIDDEN: ItemAttributeModifiers$Display$Type;
    static OVERRIDE: ItemAttributeModifiers$Display$Type;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ItemAttributeModifiers$Display$Type;
    static values(): ItemAttributeModifiers$Display$Type[];
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