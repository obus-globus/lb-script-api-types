import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StringRepresentable } from '../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class PlayerModelType extends Enum<PlayerModelType> implements StringRepresentable {
    static CODEC: Codec<PlayerModelType>;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static SLIM: PlayerModelType;
    static STREAM_CODEC: StreamCodec<ByteBuf, PlayerModelType>;
    static WIDE: PlayerModelType;
    static byLegacyServicesName(paramname: string): PlayerModelType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PlayerModelType;
    static values(): PlayerModelType[];
    private constructor(id: string, legacyServicesId: string)
    // private id: string;
    // private legacyServicesId: string;
    getSerializedName(): string;
    name(): "SLIM" | "WIDE";
}