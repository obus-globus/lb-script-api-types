import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Rabbit$Variant extends Enum<Rabbit$Variant> implements StringRepresentable {
    static BLACK: Rabbit$Variant;
    static BROWN: Rabbit$Variant;
    static CODEC: Codec<Rabbit$Variant>;
    static DEFAULT: Rabbit$Variant;
    static EVIL: Rabbit$Variant;
    static GOLD: Rabbit$Variant;
    static LEGACY_CODEC: Codec<Rabbit$Variant>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SALT: Rabbit$Variant;
    static STREAM_CODEC: StreamCodec<ByteBuf, Rabbit$Variant>;
    static WHITE: Rabbit$Variant;
    static WHITE_SPLOTCHED: Rabbit$Variant;
    static byId(paramid: number): Rabbit$Variant;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Rabbit$Variant;
    static values(): Rabbit$Variant[];
    private constructor(id: number, name: string)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    id(): number;
    name(): "BROWN" | "WHITE" | "BLACK" | "WHITE_SPLOTCHED" | "GOLD" | "SALT" | "EVIL";
}