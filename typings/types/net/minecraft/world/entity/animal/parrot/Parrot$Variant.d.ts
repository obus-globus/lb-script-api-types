import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class Parrot$Variant extends Enum<Parrot$Variant> implements StringRepresentable {
    static BLUE: Parrot$Variant;
    static CODEC: Codec<Parrot$Variant>;
    static DEFAULT: Parrot$Variant;
    static GRAY: Parrot$Variant;
    static GREEN: Parrot$Variant;
    static LEGACY_CODEC: Codec<Parrot$Variant>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static RED_BLUE: Parrot$Variant;
    static STREAM_CODEC: StreamCodec<ByteBuf, Parrot$Variant>;
    static YELLOW_BLUE: Parrot$Variant;
    static byId(paramid: number): Parrot$Variant;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Parrot$Variant;
    static values(): Parrot$Variant[];
    private constructor(id: number, name: string)
    readonly id: number;
    // private name: string;
    getId(): number;
    getSerializedName(): string;
    name(): "RED_BLUE" | "BLUE" | "GREEN" | "YELLOW_BLUE" | "GRAY";
}