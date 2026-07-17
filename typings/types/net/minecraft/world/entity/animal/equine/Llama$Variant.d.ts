import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Llama$Variant extends Enum<Llama$Variant> implements StringRepresentable {
    static BROWN: Llama$Variant;
    static CODEC: Codec<Llama$Variant>;
    static CREAMY: Llama$Variant;
    static DEFAULT: Llama$Variant;
    static GRAY: Llama$Variant;
    static LEGACY_CODEC: Codec<Llama$Variant>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, Llama$Variant>;
    static WHITE: Llama$Variant;
    static byId(paramid: number): Llama$Variant;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Llama$Variant;
    static values(): Llama$Variant[];
    private constructor(id: number, name: string)
    readonly id: number;
    // private name: string;
    getId(): number;
    getSerializedName(): string;
    name(): "CREAMY" | "WHITE" | "BROWN" | "GRAY";
}