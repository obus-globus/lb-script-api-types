import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StrongKeyWeakValueEntry } from '../../../../../com/oracle/truffle/api/object/StrongKeyWeakValueEntry.d.ts'
import type { TransitionMap } from '../../../../../com/oracle/truffle/api/object/TransitionMap.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class TrieTransitionMap<K extends unknown, V extends unknown> extends TransitionMap<K, V> implements BiFunction<Object, V, Map$Entry<Object, V>> {
    static create<K extends unknown, V extends unknown>(): TransitionMap<K, V>;
    constructor()
    // private map: JavaMap<Object, V>;
    andThen(arg0: (param0: Map$Entry<Object, V>) => V): (param0: Object, param1: V) => V;
    apply(k: Object, v: V): Map$Entry<Object, V>;
    expungeStaleEntry(entry: StrongKeyWeakValueEntry<Object, V>): void;
    forEach(consumer: (param0: K, param1: V) => void): void;
    get(key: Object): V;
    putAnyKey(key: Object, value: V): V;
    putAnyKeyIfAbsent(key: Object, value: V): V;
    remove(key: Object): V;
}