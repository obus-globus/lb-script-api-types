import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Salmon$Variant extends Enum<Salmon$Variant> implements StringRepresentable {
    static CODEC: Codec<Salmon$Variant>;
    static DEFAULT: Salmon$Variant;
    static LARGE: Salmon$Variant;
    static MEDIUM: Salmon$Variant;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SMALL: Salmon$Variant;
    static STREAM_CODEC: StreamCodec<ByteBuf, Salmon$Variant>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Salmon$Variant;
    static values(): Salmon$Variant[];
    private constructor(name: string, id: number, boundingBoxScale: number)
    // private boundingBoxScale: number;
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    // private id(): number;
    name(): "SMALL" | "MEDIUM" | "LARGE";
}