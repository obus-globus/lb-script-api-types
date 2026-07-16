import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
import type { MapsKt___MapsJvmKt } from '../../kotlin/collections/MapsKt___MapsJvmKt.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class MapsKt___MapsKt extends MapsKt___MapsJvmKt {
    static all<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): boolean;
    static any<K extends unknown, V extends unknown>(self: Map<K, V>): boolean;
    static any<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): boolean;
    static asSequence<K extends unknown, V extends unknown>(self: Map<K, V>): Sequence<Map$Entry<K, V>>;
    static build<K extends unknown, V extends unknown>(builder: Map<K, V>): Map<K, V>;
    static copy<K extends unknown, V extends unknown>(self: Map$Entry<K, V>): Map$Entry<K, V>;
    static count<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): number;
    static createMapBuilder<K extends unknown, V extends unknown>(): Map<K, V>;
    static createMapBuilder<K extends unknown, V extends unknown>(capacity: number): Map<K, V>;
    static emptyMap<K extends unknown, V extends unknown>(): Map<K, V>;
    static filter<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): Map<K, V>;
    static filterKeys<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: K) => boolean): Map<K, V>;
    static filterNot<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): Map<K, V>;
    static filterNotTo<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Map<K, V>, destination: M, predicate: (param0: Map$Entry<K, V>) => boolean): M;
    static filterTo<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Map<K, V>, destination: M, predicate: (param0: Map$Entry<K, V>) => boolean): M;
    static filterValues<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: V) => boolean): Map<K, V>;
    static flatMap<R extends unknown, K extends unknown, V extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => R[]): R[];
    static flatMapSequence<R extends unknown, K extends unknown, V extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => Sequence<R>): R[];
    static flatMapSequenceTo<C extends R[], K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: C, transform: (param0: Map$Entry<K, V>) => Sequence<R>): C;
    static flatMapTo<C extends R[], K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: C, transform: (param0: Map$Entry<K, V>) => R[]): C;
    static forEach<K extends unknown, V extends unknown>(self: Map<K, V>, action: (param0: Map$Entry<K, V>) => void): void;
    static getOrDefaultImpl<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, default_: V): V | null;
    static getOrImplicitDefaultNullable<V extends unknown, K extends unknown>(self: Map<K, V>, key: K): V;
    static getOrPut<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, defaultValue: () => V): V;
    static getOrPutIfNullImpl<V extends unknown, K extends unknown>(self: Map<K, V>, key: K, newValue: V): V;
    static getValue<V extends unknown, K extends unknown>(self: Map<K, V>, key: K): V;
    static hashMapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static linkedMapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static map<R extends unknown, K extends unknown, V extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => R): R[];
    static mapCapacity(expectedSize: number): number;
    static mapEntryOf<K extends unknown, V extends unknown>(key: K, value: V): Map$Entry<K, V>;
    static mapKeys<R extends unknown, V extends unknown, K extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => R): Map<R, V>;
    static mapKeysTo<M extends Map<R, V>, K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: M, transform: (param0: Map$Entry<K, V>) => R): M;
    static mapNotNull<R extends unknown, K extends unknown, V extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => R | null): R[];
    static mapNotNullTo<C extends R[], K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: C, transform: (param0: Map$Entry<K, V>) => R | null): C;
    static mapOf<K extends unknown, V extends unknown>(pair: Pair<K, V>): Map<K, V>;
    static mapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static mapTo<C extends R[], K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: C, transform: (param0: Map$Entry<K, V>) => R): C;
    static mapValues<K extends unknown, R extends unknown, V extends unknown>(self: Map<K, V>, transform: (param0: Map$Entry<K, V>) => R): Map<K, R>;
    static mapValuesTo<M extends Map<K, R>, K extends unknown, V extends unknown, R extends unknown>(self: Map<K, V>, destination: M, transform: (param0: Map$Entry<K, V>) => R): M;
    static minBy<K extends unknown, V extends unknown, R extends Comparable<R>>(self: Map<K, V>, selector: (param0: Map$Entry<K, V>) => R): Map$Entry<K, V> | null;
    static minWith<K extends unknown, V extends unknown>(self: Map<K, V>, comparator: (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number): Map$Entry<K, V> | null;
    static minus<K extends unknown, V extends unknown>(self: Map<K, V>, key: K): Map<K, V>;
    static minus<K extends unknown, V extends unknown>(self: Map<K, V>, keys: K[]): Map<K, V>;
    static minus<K extends unknown, V extends unknown>(self: Map<K, V>, keys: Sequence<K>): Map<K, V>;
    static mutableMapOf<K extends unknown, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static none<K extends unknown, V extends unknown>(self: Map<K, V>): boolean;
    static none<K extends unknown, V extends unknown>(self: Map<K, V>, predicate: (param0: Map$Entry<K, V>) => boolean): boolean;
    static onEach<M extends Map<K, V>, K extends unknown, V extends unknown>(self: M, action: (param0: Map$Entry<K, V>) => void): M;
    static onEachIndexed<M extends Map<K, V>, K extends unknown, V extends unknown>(self: M, action: (param0: number, param1: Map$Entry<K, V>) => void): M;
    static optimizeReadOnlyMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Pair<K, V>[]): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, map: Map<K, V>): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, pair: Pair<K, V>): Map<K, V>;
    static plus<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Sequence<Pair<K, V>>): Map<K, V>;
    static putAll<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Pair<K, V>[]): void;
    static putAll<K extends unknown, V extends unknown>(self: Map<K, V>, pairs: Sequence<Pair<K, V>>): void;
    static sortedMapOf<K extends Comparable<K>, V extends unknown>(...pairs: Pair<K, V>[]): Map<K, V>;
    static sortedMapOf<K extends unknown, V extends unknown>(comparator: (param0: K, param1: K) => number, ...pairs: Pair<K, V>[]): Map<K, V>;
    static toList<K extends unknown, V extends unknown>(self: Map<K, V>): Pair<K, V>[];
    static toMap<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Pair<K, V>[], destination: M): M;
    static toMap<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Map<K, V>, destination: M): M;
    static toMap<M extends Map<K, V>, K extends unknown, V extends unknown>(self: Sequence<Pair<K, V>>, destination: M): M;
    static toMap<K extends unknown, V extends unknown>(self: Pair<K, V>[]): Map<K, V>;
    static toMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toMap<K extends unknown, V extends unknown>(self: Sequence<Pair<K, V>>): Map<K, V>;
    static toMutableMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSingletonMap<K extends unknown, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSortedMap<K extends Comparable<K>, V extends unknown>(self: Map<K, V>): Map<K, V>;
    static toSortedMap<K extends unknown, V extends unknown>(self: Map<K, V>, comparator: (param0: K, param1: K) => number): Map<K, V>;
    static withDefault<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
    static withDefaultMutable<K extends unknown, V extends unknown>(self: Map<K, V>, defaultValue: (param0: K) => V): Map<K, V>;
}