import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DebugScreenOverlay } from '../../../../net/minecraft/client/gui/components/DebugScreenOverlay.d.ts'
import type { ClientDebugSubscriber$ValueMap } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueMap.d.ts'
import type { ClientDebugSubscriber$ValueMapType } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueMapType.d.ts'
import type { ClientDebugSubscriber$ValueMaps } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueMaps.d.ts'
import type { ClientPacketListener } from '../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
import type { DebugSubscription$Event } from '../../../../net/minecraft/util/debug/DebugSubscription$Event.d.ts'
import type { DebugSubscription$Update } from '../../../../net/minecraft/util/debug/DebugSubscription$Update.d.ts'
import type { DebugValueAccess } from '../../../../net/minecraft/util/debug/DebugValueAccess.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class ClientDebugSubscriber extends Object {
    constructor(connection: ClientPacketListener, debugScreenOverlay: DebugScreenOverlay)
    // private connection: ClientPacketListener;
    // private debugScreenOverlay: DebugScreenOverlay;
    // private remoteSubscriptions: DebugSubscription<Object>[];
    // private valuesBySubscription: Map<DebugSubscription<Object>, ClientDebugSubscriber$ValueMaps<Object>>;
    clear(): void;
    createDebugValueAccess(level: Level): DebugValueAccess;
    dropChunk(chunkPos: ChunkPos): void;
    dropEntity(entity: Entity): void;
    dropLevel(): void;
    // private forEachValue<V extends Object | number | string | boolean, K extends Object | number | string | boolean>(subscription: DebugSubscription<V>, type: (param0: ClientDebugSubscriber$ValueMaps<V>) => ClientDebugSubscriber$ValueMap<K, V>, consumer: (param0: K, param1: V) => void): void;
    // private getValue<V extends Object | number | string | boolean, K extends Object | number | string | boolean>(subscription: DebugSubscription<V>, key: K, type: (param0: ClientDebugSubscriber$ValueMaps<V>) => ClientDebugSubscriber$ValueMap<K, V>): V;
    // private getValueMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(subscription: DebugSubscription<V>, mapType: (param0: ClientDebugSubscriber$ValueMaps<V>) => ClientDebugSubscriber$ValueMap<K, V>): ClientDebugSubscriber$ValueMap<K, V>;
    // private getValueMaps<V extends Object | number | string | boolean>(subscription: DebugSubscription<V>): ClientDebugSubscriber$ValueMaps<V>;
    // private initializeSubscriptions(newSubscriptions: DebugSubscription<Object>[]): void;
    // private onSubscriptionsChanged(newSubscriptions: DebugSubscription<Object>[]): void;
    pushEvent<T extends Object | number | string | boolean>(gameTime: number, event: DebugSubscription$Event<T>): void;
    // private requestedSubscriptions(): DebugSubscription<Object>[];
    tick(gameTime: number): void;
    updateBlock<T extends Object | number | string | boolean>(gameTime: number, blockPos: BlockPos, update: DebugSubscription$Update<T>): void;
    updateChunk<T extends Object | number | string | boolean>(gameTime: number, chunkPos: ChunkPos, update: DebugSubscription$Update<T>): void;
    updateEntity<T extends Object | number | string | boolean>(gameTime: number, entity: Entity, update: DebugSubscription$Update<T>): void;
    // private updateMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(gameTime: number, key: K, update: DebugSubscription$Update<V>, type: (param0: ClientDebugSubscriber$ValueMaps<V>) => ClientDebugSubscriber$ValueMap<K, V>): void;
}