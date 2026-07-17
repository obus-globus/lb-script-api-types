import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
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
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
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