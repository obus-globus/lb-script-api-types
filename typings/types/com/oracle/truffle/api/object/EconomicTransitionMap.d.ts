import type { StrongKeyWeakValueEntry } from '../../../../../com/oracle/truffle/api/object/StrongKeyWeakValueEntry.d.ts'
import type { TransitionMap } from '../../../../../com/oracle/truffle/api/object/TransitionMap.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class EconomicTransitionMap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends TransitionMap<K, V> {
    static create(): TransitionMap<Object, Object>;
    constructor()
    // private map: EconomicMap<Object, StrongKeyWeakValueEntry<Object, V>>;
    expungeStaleEntry(entry: StrongKeyWeakValueEntry<Object, V>): void;
    forEach(consumer: (param0: K, param1: V) => void): void;
    get(key: Object): V;
    // private getValue(entry: StrongKeyWeakValueEntry<K, V>): V;
    putAnyKey(key: Object, value: V): V;
    putAnyKeyIfAbsent(key: Object, value: V): V;
    remove(key: Object): V;
}