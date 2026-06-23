import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientDebugSubscriber$ValueMap } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueMap.d.ts'
import type { ClientDebugSubscriber$ValueWrapper } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueWrapper.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export class ClientDebugSubscriber$ValueMaps<V extends unknown> extends Object {
    private constructor()
    // private blockValues: ClientDebugSubscriber$ValueMap<BlockPos, V>;
    // private chunkValues: ClientDebugSubscriber$ValueMap<ChunkPos, V>;
    // private entityValues: ClientDebugSubscriber$ValueMap<UUID, V>;
    // private events: ClientDebugSubscriber$ValueWrapper<V>[];
    dropChunkAndBlocks(chunkPos: ChunkPos): void;
    purgeExpired(gameTime: number): void;
}