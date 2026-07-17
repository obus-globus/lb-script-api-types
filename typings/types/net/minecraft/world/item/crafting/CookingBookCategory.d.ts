import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CookingBookCategory extends Enum<CookingBookCategory> implements StringRepresentable {
    static BLOCKS: CookingBookCategory;
    static CODEC: Codec<CookingBookCategory>;
    static FOOD: CookingBookCategory;
    static MISC: CookingBookCategory;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, CookingBookCategory>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CookingBookCategory;
    static values(): CookingBookCategory[];
    private constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    name(): "FOOD" | "BLOCKS" | "MISC";
}