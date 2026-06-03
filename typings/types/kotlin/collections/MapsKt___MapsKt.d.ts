import type { Comparator } from '../../java/util/Comparator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
import type { MapsKt___MapsJvmKt } from '../../kotlin/collections/MapsKt___MapsJvmKt.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class MapsKt___MapsKt extends MapsKt___MapsJvmKt {
    static all(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): boolean;
    static any(paramarg0: Map<Object | null, Object | null>): boolean;
    static any(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): boolean;
    static asSequence(paramarg0: Map<Object | null, Object | null>): Sequence<Object>;
    static build(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static count(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): number;
    static createMapBuilder(): Map<Object | null, Object | null>;
    static createMapBuilder(paramarg0: number): Map<Object | null, Object | null>;
    static emptyMap(): Map<Object | null, Object | null>;
    static filter(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): Map<Object | null, Object | null>;
    static filterKeys(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): Map<Object | null, Object | null>;
    static filterNot(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): Map<Object | null, Object | null>;
    static filterNotTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => boolean): Object | null;
    static filterTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => boolean): Object | null;
    static filterValues(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): Map<Object | null, Object | null>;
    static flatMap(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): (Object | null)[];
    static flatMapSequence(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): (Object | null)[];
    static flatMapSequenceTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static flatMapTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static forEach(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => void): void;
    static getOrElseNullable(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: () => Object | null): Object | null;
    static getOrImplicitDefaultNullable(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static getOrPut(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: () => Object | null): Object | null;
    static getOrPut(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: () => Object | null): Object | null;
    static getValue(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static hashMapOf(paramarg0: Object | null): Map<Object | null, Object | null>;
    static linkedMapOf(paramarg0: Object | null): Map<Object | null, Object | null>;
    static map(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): (Object | null)[];
    static mapCapacity(paramarg0: number): number;
    static mapKeys(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): Map<Object | null, Object | null>;
    static mapKeysTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static mapNotNull(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): (Object | null)[];
    static mapNotNullTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static mapOf(paramarg0: Pair<Object, Object>): Map<Object | null, Object | null>;
    static mapOf(paramarg0: Object | null): Map<Object | null, Object | null>;
    static mapTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static mapValues(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): Map<Object | null, Object | null>;
    static mapValuesTo(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null, paramarg2: (param0: Object | null) => Object | null): Object | null;
    static minBy(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): Map$Entry<Object, Object>;
    static minWith(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => kotlin.Boolean): Map$Entry<Object, Object>;
    static minus(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Map<Object | null, Object | null>;
    static minus(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Map<Object | null, Object | null>;
    static minus(paramarg0: Map<Object | null, Object | null>, paramarg1: (Object | null)[]): Map<Object | null, Object | null>;
    static minus(paramarg0: Map<Object | null, Object | null>, paramarg1: Sequence<Object>): Map<Object | null, Object | null>;
    static mutableMapOf(paramarg0: Object | null): Map<Object | null, Object | null>;
    static none(paramarg0: Map<Object | null, Object | null>): boolean;
    static none(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => boolean): boolean;
    static onEach(paramarg0: Object | null, paramarg1: (param0: Object | null) => void): Object | null;
    static onEachIndexed(paramarg0: Object | null, paramarg1: (param0: Object | null, param1: Object | null) => void): Object | null;
    static optimizeReadOnlyMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: (Object | null)[]): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Pair<Object, Object>): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Map<Object | null, Object | null>;
    static plus(paramarg0: Map<Object | null, Object | null>, paramarg1: Sequence<Object>): Map<Object | null, Object | null>;
    static putAll(paramarg0: Map<Object | null, Object | null>, paramarg1: (Object | null)[]): void;
    static putAll(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): void;
    static putAll(paramarg0: Map<Object | null, Object | null>, paramarg1: Sequence<Object>): void;
    static sortedMapOf(paramarg0: Object | null): Map<Object | null, Object | null>;
    static sortedMapOf(paramarg0: (param0: Object | null) => kotlin.Boolean, paramarg1: Object | null): Map<Object | null, Object | null>;
    static toList(paramarg0: Map<Object | null, Object | null>): (Object | null)[];
    static toMap(paramarg0: (Object | null)[], paramarg1: Object | null): Object | null;
    static toMap(paramarg0: Map<Object | null, Object | null>, paramarg1: Object | null): Object | null;
    static toMap(paramarg0: Object | null, paramarg1: Object | null): Object | null;
    static toMap(paramarg0: Sequence<Object>, paramarg1: Object | null): Object | null;
    static toMap(paramarg0: (Object | null)[]): Map<Object | null, Object | null>;
    static toMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toMap(paramarg0: Object | null): Map<Object | null, Object | null>;
    static toMap(paramarg0: Sequence<Object>): Map<Object | null, Object | null>;
    static toMutableMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSingletonMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSortedMap(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static toSortedMap(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => kotlin.Boolean): Map<Object | null, Object | null>;
    static withDefault(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): Map<Object | null, Object | null>;
    static withDefaultMutable(paramarg0: Map<Object | null, Object | null>, paramarg1: (param0: Object | null) => Object | null): Map<Object | null, Object | null>;
}