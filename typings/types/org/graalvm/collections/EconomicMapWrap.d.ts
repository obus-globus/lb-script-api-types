import type { JavaMap } from '../../../JavaMap.d.ts'
import type { BiFunction } from '../../../java/util/function/BiFunction.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../org/graalvm/collections/EconomicMap.d.ts'
import type { MapCursor } from '../../../org/graalvm/collections/MapCursor.d.ts'
import type { UnmodifiableEconomicMap } from '../../../org/graalvm/collections/UnmodifiableEconomicMap.d.ts'
export class EconomicMapWrap<K extends unknown, V extends unknown> extends Object implements EconomicMap<K, V> {
    constructor(map: JavaMap<K, V>)
    // private map: JavaMap<K, V>;
    clear(): void;
    computeIfAbsent(key: K, mappingFunction: (param0: K) => V): V;
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