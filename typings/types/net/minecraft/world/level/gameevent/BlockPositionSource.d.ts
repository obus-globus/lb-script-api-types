import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { PositionSource } from '../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
import type { PositionSourceType } from '../../../../../net/minecraft/world/level/gameevent/PositionSourceType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockPositionSource extends Record implements PositionSource {
    static CODEC: MapCodec<BlockPositionSource>;
    static STREAM_CODEC: StreamCodec<ByteBuf, BlockPositionSource>;
    constructor(pos: BlockPos)
    // private pos: BlockPos;
    equals(o: Object | null): boolean;
    getPosition(level: Level): Optional<Vec3>;
    getType(): PositionSourceType<BlockPositionSource>;
    hashCode(): number;
    pos(): BlockPos;
    toString(): string;
}