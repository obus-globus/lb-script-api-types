import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientDebugSubscriber$ValueWrapper } from '../../../../net/minecraft/client/multiplayer/ClientDebugSubscriber$ValueWrapper.d.ts'
import type { DebugSubscription$Update } from '../../../../net/minecraft/util/debug/DebugSubscription$Update.d.ts'
export class ClientDebugSubscriber$ValueMap<K extends unknown, V extends unknown> extends Object {
    private constructor()
    // private values: Map<K, ClientDebugSubscriber$ValueWrapper<V>>;
    apply(gameTime: number, key: K, update: DebugSubscription$Update<V>): void;
    forEach(output: (param0: K, param1: V) => void): void;
    getValue(key: K): V;
    removeKey(key: K): void;
    removeKeys(predicate: (param0: K) => boolean): void;
    removeValues(predicate: (param0: ClientDebugSubscriber$ValueWrapper<V>) => boolean): void;
}