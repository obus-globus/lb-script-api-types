import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { MapsKt__MapWithDefaultKt } from '../../kotlin/collections/MapsKt__MapWithDefaultKt.d.ts'
export class MapsKt__MapsJVMKt extends MapsKt__MapWithDefaultKt {
    static build<K extends unknown, V extends unknown>(builder: Map<K, V>): Map<K, V>;
    static createMapBuilder<K extends unknown, V extends unknown>(): Map<K, V>;
    static createMapBuilder<K extends unknown, V extends unknown>(capacity: number): Map<K, V>;
    static getOrDefaultImpl<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, default_: V): V | null;
    static getOrImplicitDefaultNullable<V extends unknown, K extends unknown>(self: Map<K, V>, key: K): V;
    static getOrPut<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, defaultValue: () => V): V;
    static getOrPutIfNullImpl<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, newValue: V): V;
    static mapCapacity(expectedSize: number): number;
    static mapOf<K extends unknown, V extends unknown>(pair: Pair<K, V>): Map<K, V>;
    static sortedMapOf<K extends Comparable<K>, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static sortedMapOf<K extends unknown, V extends unknown>(comparator: (param0: K, param1: K) => number, ...pairs: Pair<K, V>[]): Map<K, V>;
    static toSingletonMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSortedMap<K extends Comparable<K>, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSortedMap<K extends unknown, V extends unknown>(self: Map<K, V>, comparator: (param0: K, param1: K) => number): Map<K, V>;
    static withDefault<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
    static withDefaultMutable<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
}