import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class CopperGolemState extends Enum<CopperGolemState> implements StringRepresentable {
    static CODEC: Codec<CopperGolemState>;
    static DROPPING_ITEM: CopperGolemState;
    static DROPPING_NO_ITEM: CopperGolemState;
    static GETTING_ITEM: CopperGolemState;
    static GETTING_NO_ITEM: CopperGolemState;
    static IDLE: CopperGolemState;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STREAM_CODEC: StreamCodec<ByteBuf, CopperGolemState>;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CopperGolemState;
    static values(): CopperGolemState[];
    private constructor(name: string, id: number)
    // private id: number;
    // private name: string;
    getSerializedName(): string;
    // private id(): number;
    name(): "IDLE" | "GETTING_ITEM" | "GETTING_NO_ITEM" | "DROPPING_ITEM" | "DROPPING_NO_ITEM";
}