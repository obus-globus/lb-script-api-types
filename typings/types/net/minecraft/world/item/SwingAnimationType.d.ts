import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class SwingAnimationType extends Enum<SwingAnimationType> implements StringRepresentable {
    static CODEC: Codec<SwingAnimationType>;
    static NONE: SwingAnimationType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STAB: SwingAnimationType;
    static STREAM_CODEC: StreamCodec<ByteBuf, SwingAnimationType>;
    static WHACK: SwingAnimationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SwingAnimationType;
    static values(): SwingAnimationType[];
    private constructor(id: number, name: string)
    readonly id: number;
    // private name: string;
    getId(): number;
    getSerializedName(): string;
    name(): "NONE" | "WHACK" | "STAB";
}