import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientDebugSubscriber$ValueMap } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueMap.d.ts'
import type { ClientDebugSubscriber$ValueMaps } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueMaps.d.ts'
export interface ClientDebugSubscriber$ValueMapType<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    get(maps: ClientDebugSubscriber$ValueMaps<V>): ClientDebugSubscriber$ValueMap<K, V>;
}