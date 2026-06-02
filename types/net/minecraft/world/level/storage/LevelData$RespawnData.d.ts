import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { GlobalPos } from '../../../../../net/minecraft/core/GlobalPos.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class LevelData$RespawnData extends Record {
    static CODEC: Codec<LevelData$RespawnData>;
    static DEFAULT: LevelData$RespawnData;
    static MAP_CODEC: MapCodec<LevelData$RespawnData>;
    static STREAM_CODEC: StreamCodec<ByteBuf, LevelData$RespawnData>;
    static of(paramdimension: ResourceKey<Level>, parampos: BlockPos, paramyaw: number, parampitch: number): LevelData$RespawnData;
    // private globalPos: GlobalPos;
    // private pitch: number;
    // private yaw: number;
    dimension(): ResourceKey<Level>;
    equals(o: Object | null): boolean;
    globalPos(): GlobalPos;
    hashCode(): number;
    pitch(): number;
    pos(): BlockPos;
    toString(): string;
    yaw(): number;
}