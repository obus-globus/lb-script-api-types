import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Keyable } from '../../../../com/mojang/serialization/Keyable.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { StringRepresentable$EnumCodec } from '../../../../net/minecraft/util/StringRepresentable$EnumCodec.d.ts'
export class ItemUseAnimation extends Enum<ItemUseAnimation> implements StringRepresentable {
    static BLOCK: ItemUseAnimation;
    static BOW: ItemUseAnimation;
    static BRUSH: ItemUseAnimation;
    static BUNDLE: ItemUseAnimation;
    static CODEC: Codec<ItemUseAnimation>;
    static CROSSBOW: ItemUseAnimation;
    static DRINK: ItemUseAnimation;
    static EAT: ItemUseAnimation;
    static NONE: ItemUseAnimation;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SPEAR: ItemUseAnimation;
    static SPYGLASS: ItemUseAnimation;
    static STREAM_CODEC: StreamCodec<ByteBuf, ItemUseAnimation>;
    static TOOT_HORN: ItemUseAnimation;
    static TRIDENT: ItemUseAnimation;
    static createNameLookup(paramvalueArray: (StringRepresentable | null)[]): (param0: string) => StringRepresentable | null;
    static createNameLookup(paramvalueArray: (Object | null)[], paramconverter: (param0: Object | null) => string): (param0: string) => Object | null;
    static fromEnum(paramvalues: () => (Object | null)[]): StringRepresentable$EnumCodec<any>;
    static fromEnumWithMapping(paramvalues: () => (Object | null)[], paramconverter: (param0: string) => string): StringRepresentable$EnumCodec<any>;
    static fromValues(paramvalues: () => (StringRepresentable | null)[]): Codec<StringRepresentable>;
    static keys(paramvalues: StringRepresentable[]): Keyable;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ItemUseAnimation;
    static values(): ItemUseAnimation[];
    private constructor(id: number, name: string)
    private constructor(id: number, name: string, customArmTransform: boolean)
    // private customArmTransform: boolean;
    readonly id: number;
    // private name: string;
    getId(): number;
    getSerializedName(): string;
    hasCustomArmTransform(): boolean;
    name(): "NONE" | "EAT" | "DRINK" | "BLOCK" | "BOW" | "TRIDENT" | "CROSSBOW" | "SPYGLASS" | "TOOT_HORN" | "BRUSH" | "BUNDLE" | "SPEAR";
}