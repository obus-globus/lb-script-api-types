import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { Equivalence } from '../../../org/graalvm/collections/Equivalence.d.ts'
import type { MapCursor } from '../../../org/graalvm/collections/MapCursor.d.ts'
import type { UnmodifiableEconomicMap } from '../../../org/graalvm/collections/UnmodifiableEconomicMap.d.ts'
export class EconomicMapWrap<K extends unknown, V extends unknown> extends Object implements EconomicMap<K, V> {
    static create<K extends unknown, V extends unknown>(): EconomicMap<K, V>;
    static create<K extends unknown, V extends unknown>(paraminitialCapacity: number): EconomicMap<K, V>;
    static create<K extends unknown, V extends unknown>(paramstrategy: Equivalence): EconomicMap<K, V>;
    static create<K extends unknown, V extends unknown>(paramstrategy: Equivalence, paraminitialCapacity: number): EconomicMap<K, V>;
    static create<K extends unknown, V extends unknown>(paramstrategy: Equivalence, paramm: UnmodifiableEconomicMap<K, V>): EconomicMap<K, V>;
    static create<K extends unknown, V extends unknown>(paramm: UnmodifiableEconomicMap<K, V>): EconomicMap<K, V>;
    static emptyCursor<K extends unknown, V extends unknown>(): MapCursor<K, V>;
    static emptyMap<K extends unknown, V extends unknown>(): EconomicMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramkey1: K, paramvalue1: V): EconomicMap<K, V>;
    static of<K extends unknown, V extends unknown>(paramkey1: K, paramvalue1: V, paramkey2: K, paramvalue2: V): EconomicMap<K, V>;
    static wrapMap<K extends unknown, V extends unknown>(parammap: Map<K, V>): EconomicMap<K, V>;
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
    removeKey(key: K): V;
    replaceAll(function_: (param0: K, param1: V) => V): void;
    size(): number;
    toString(): string;
}