import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { Equivalence } from '../../../org/graalvm/collections/Equivalence.d.ts'
import type { MapCursor } from '../../../org/graalvm/collections/MapCursor.d.ts'
import type { UnmodifiableEconomicMap } from '../../../org/graalvm/collections/UnmodifiableEconomicMap.d.ts'
export class EconomicMapWrap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements EconomicMap<K, V> {
    static create(): EconomicMap<Object, Object>;
    static create(paraminitialCapacity: number): EconomicMap<Object, Object>;
    static create(paramstrategy: Equivalence): EconomicMap<Object, Object>;
    static create(paramstrategy: Equivalence, paraminitialCapacity: number): EconomicMap<Object, Object>;
    static create(paramstrategy: Equivalence, paramm: UnmodifiableEconomicMap<Object, Object>): EconomicMap<Object, Object>;
    static create(paramm: UnmodifiableEconomicMap<Object, Object>): EconomicMap<Object, Object>;
    static emptyCursor(): MapCursor<Object, Object>;
    static emptyMap(): EconomicMap<Object, Object>;
    static of(paramkey1: Object | null, paramvalue1: Object | null): EconomicMap<Object, Object>;
    static of(paramkey1: Object | null, paramvalue1: Object | null, paramkey2: Object | null, paramvalue2: Object | null): EconomicMap<Object, Object>;
    static wrapMap(parammap: Map<Object | null, Object | null>): EconomicMap<Object, Object>;
    constructor(map: Map<K, V>)
    // private map: Map<K, V>;
    clear(): void;
    containsKey(key: K): boolean;
    get(key: K): V;
    get(key: K, defaultValue: V): V;
    getEntries(): MapCursor<K, V>;
    getKeys(): K[];
    getValues(): V[];
    isEmpty(): boolean;
    put(key: K, value: V): V;
    putAll(other: EconomicMap<K, V>): void;
    putAll(other: UnmodifiableEconomicMap<K, V>): void;
    putIfAbsent(key: K, value: V): V;
    putIfAbsent(key: K, value: V): V;
    removeKey(key: K): V;
    replaceAll(function_: (param0: K, param1: V) => V): void;
    size(): number;
    toString(): string;
}