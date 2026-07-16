import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
import type { MapsKt___MapsKt } from '../../kotlin/collections/MapsKt___MapsKt.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class MapsKt extends MapsKt___MapsKt {
    static all(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): boolean;
    static any(paramarg0: Map<Object | null, Object | null>): boolean;
    static any(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): boolean;
    static asSequence(paramarg0: Map<Object | null, Object | null>): Sequence<Map$Entry<Object, Object>>;
    static build(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static copy(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static count(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): number;
    static createMapBuilder(): Map<Object | null, Object | null>;
    static createMapBuilder(paramarg0: number): Map<Object | null, Object | null>;
    static emptyMap(): Map<Object | null, Object | null>;
    static filter(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterKeys(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterNot(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static filterNotTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => boolean): Object | null;
    static filterTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => boolean): Object | null;
    static filterValues(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static flatMap(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => (Object | null)[]): (Object | null)[];
    static flatMapSequence(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Sequence<Object>): (Object | null)[];
    static flatMapSequenceTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => Sequence<Object>): Object | null;
    static flatMapTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => (Object | null)[]): Object | null;
    static forEach(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => void): void;
    static getOrDefaultImpl(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static getOrImplicitDefaultNullable(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static getOrPut(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: () => Object | null): Object | null;
    static getOrPutIfNullImpl(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: Object | null): Object | null;
    static getValue(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static hashMapOf(...paramarg0: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static linkedMapOf(...paramarg0: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static map(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): (Object | null)[];
    static mapCapacity(paramarg0: number): number;
    static mapEntryOf(paramarg0: Object | null, paramarg1: Object | null): Map$Entry<Object, Object>;
    static mapKeys(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): Map<Object | null, Object | null>;
    static mapKeysTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => Object | null): Object | null;
    static mapNotNull(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): (Object | null)[];
    static mapNotNullTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => Object | null): Object | null;
    static mapOf(paramarg0: Pair<Object, Object>): Map<Object | null, Object | null>;
    static mapOf(...paramarg0: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static mapTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => Object | null): Object | null;
    static mapValues(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): Map<Object | null, Object | null>;
    static mapValuesTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object) => Object | null): Object | null;
    static minBy(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): Map$Entry<Object, Object>;
    static minWith(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null, param1: Object | null) => number): Map$Entry<Object, Object>;
    static minus(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Map<Object | null, Object | null>;
    static minus(paramarg0: Map<Object | null, Object | null>, paramarg1: (Object | null)[]): Map<Object | null, Object | null>;
    static minus(paramarg0: Map<Object | null, Object | null>, paramarg1: Sequence<Object>): Map<Object | null, Object | null>;
    static mutableMapOf(...paramarg0: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static none(paramarg0: Map<Object | null, Object | null>): boolean;
    static none(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => boolean): boolean;
    static onEach(paramarg0: Object | null, paramarg1: (param0: Object) => void): Object | null;
    static onEachIndexed(paramarg0: Object | null, paramarg1: (param0: Object, param1: Object) => void): Object | null;
    static optimizeReadOnlyMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Pair<Object, Object>): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Sequence<Pair<Object, Object>>): Map<Object | null, Object | null>;
    static putAll(paramarg0: Map<Object, Object>, paramarg1: Pair<Object, Object>[]): void;
    static putAll(paramarg0: Map<Object, Object>, paramarg1: Sequence<Pair<Object, Object>>): void;
    static sortedMapOf(...paramarg0: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static sortedMapOf(paramarg0: (param0: Object, param1: Object) => number, ...paramarg1: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static toList(paramarg0: Map<Object | null, Object | null>): Pair<Object, Object>[];
    static toMap(paramarg0: Pair<Object, Object>[], paramarg1: Object | null): Object | null;
    static toMap(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static toMap(paramarg0: Sequence<Pair<Object, Object>>, paramarg1: Object | null): Object | null;
    static toMap(paramarg0: Pair<Object, Object>[]): Map<Object | null, Object | null>;
    static toMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toMap(paramarg0: Sequence<Pair<Object, Object>>): Map<Object | null, Object | null>;
    static toMutableMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSingletonMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSortedMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSortedMap(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object, param1: Object) => number): Map<Object | null, Object | null>;
    static withDefault(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): Map<Object | null, Object | null>;
    static withDefaultMutable(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object) => Object | null): Map<Object | null, Object | null>;
}