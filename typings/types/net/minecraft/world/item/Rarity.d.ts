import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Rarity extends Enum<Rarity> implements StringRepresentable {
    static BY_ID: (param0: number) => Rarity;
    static CODEC: Codec<Rarity>;
    static COMMON: Rarity;
    static EPIC: Rarity;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RARE: Rarity;
    static STREAM_CODEC: StreamCodec<ByteBuf, Rarity>;
    static UNCOMMON: Rarity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Rarity;
    static values(): Rarity[];
    private constructor(id: number, name: string, color: ChatFormatting)
    // private color: ChatFormatting;
    // private id: number;
    // private name: string;
    color(): ChatFormatting;
    getSerializedName(): string;
    name(): "COMMON" | "UNCOMMON" | "RARE" | "EPIC";
}