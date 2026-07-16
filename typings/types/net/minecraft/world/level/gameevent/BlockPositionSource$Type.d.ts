import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BlockPositionSource } from '../../../../../net/minecraft/world/level/gameevent/BlockPositionSource.d.ts'
import type { EntityPositionSource } from '../../../../../net/minecraft/world/level/gameevent/EntityPositionSource.d.ts'
import type { PositionSource } from '../../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
import type { PositionSourceType } from '../../../../../net/minecraft/world/level/gameevent/PositionSourceType.d.ts'
export class BlockPositionSource$Type extends Object implements PositionSourceType<BlockPositionSource> {
    static BLOCK: PositionSourceType<BlockPositionSource>;
    static ENTITY: PositionSourceType<EntityPositionSource>;
    static register<S extends PositionSourceType<T>, T extends PositionSource>(paramname: string, paramserializer: S): S;
    constructor()
    codec(): MapCodec<BlockPositionSource>;
    streamCodec(): StreamCodec<ByteBuf, BlockPositionSource>;
}