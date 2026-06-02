import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { StreamCodec } from '../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../net/minecraft/world/level/Level.d.ts'
export class GlobalPos extends Record {
    static CODEC: Codec<GlobalPos>;
    static MAP_CODEC: MapCodec<GlobalPos>;
    static STREAM_CODEC: StreamCodec<ByteBuf, GlobalPos>;
    static of(paramdimension: ResourceKey<Level>, parampos: BlockPos): GlobalPos;
    constructor(dimension: ResourceKey<Level>, pos: BlockPos)
    // private dimension: ResourceKey<Level>;
    // private pos: BlockPos;
    dimension(): ResourceKey<Level>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isCloseEnough(dimension: ResourceKey<Level>, pos: BlockPos, maxDistance: number): boolean;
    pos(): BlockPos;
    toString(): string;
}