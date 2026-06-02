import type { StrongKeyWeakValueEntry } from '../../../../../com/oracle/truffle/api/object/StrongKeyWeakValueEntry.d.ts'
import type { ReferenceQueue } from '../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class TransitionMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    static create(): TransitionMap<Object, Object>;
    constructor()
    // private queue: ReferenceQueue<V>;
    containsKey(key: Object): boolean;
    expungeStaleEntries(): void;
    expungeStaleEntry(entry: StrongKeyWeakValueEntry<Object, V>): void;
    forEach(consumer: (param0: K, param1: V) => void): void;
    get(key: Object): V;
    getValue(entry: Map$Entry<K, V>): V;
    put(key: K, value: V): V;
    putAnyKey(key: Object, value: V): V;
    putAnyKeyIfAbsent(key: Object, value: V): V;
    putIfAbsent(key: K, value: V): V;
    putWeakKey(key: K, value: V): V;
    putWeakKeyIfAbsent(key: K, value: V): V;
    remove(key: Object): V;
    unwrapKey(key: Object): K;
}