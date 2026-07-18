import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Equivalence } from '../../../org/graalvm/collections/Equivalence.d.ts'
import type { MapCursor } from '../../../org/graalvm/collections/MapCursor.d.ts'
import type { UnmodifiableEconomicMap } from '../../../org/graalvm/collections/UnmodifiableEconomicMap.d.ts'
export interface EconomicMap<K extends unknown, V extends unknown> extends Object, UnmodifiableEconomicMap<K, V> {
    clear(): void;
    get(key: K, defaultValue: V): V;
    getEntries(): MapCursor<K, V>;
    getEquivalenceStrategy(): Equivalence;
    put(key: K, value: V): V;
    putAll(other: EconomicMap<K, V>): void;
    putAll(other: UnmodifiableEconomicMap<K, V>): void;
    putIfAbsent(key: K, value: V): V;
    removeKey(key: K): V;
    replaceAll(function_: (param0: K, param1: V) => V): void;
}