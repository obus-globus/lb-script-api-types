import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class Collections extends Object {
    static arrayToList(paramarg0: Object): (Object | null)[];
    static asSet(paramarg0: E[]): (Object | null)[];
    static concat(paramarg0: (Object | null)[], paramarg1: Object | null): (Object | null)[];
    static contains(paramarg0: Enumeration<Object>, paramarg1: Object): boolean;
    static contains(paramarg0: Iterator<Object>, paramarg1: Object): boolean;
    static containsAny(paramarg0: E[], paramarg1: E[]): boolean;
    static containsInstance(paramarg0: E[], paramarg1: Object): boolean;
    static emptyList(): (Object | null)[];
    static emptyMap(): Map<Object | null, Object | null>;
    static emptySet(): (Object | null)[];
    static findCommonElementType(paramarg0: E[]): Class<Object>;
    static findFirstMatch(paramarg0: E[], paramarg1: E[]): Object;
    static findValueOfType(paramarg0: E[], paramarg1: Class<Object>): Object | null;
    static findValueOfType(paramarg0: E[], paramarg1: Object | null): Object;
    static hasUniqueObject(paramarg0: E[]): boolean;
    static immutable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static immutable(paramarg0: Object | null): Object | null;
    static immutable(paramarg0: (Object | null)[]): (Object | null)[];
    static immutable(paramarg0: (Object | null)[]): (Object | null)[];
    static isEmpty(paramarg0: E[]): boolean;
    static isEmpty(paramarg0: Map<Object | null, Object | null>): boolean;
    static mergeArrayIntoCollection(paramarg0: Object, paramarg1: E[]): void;
    static mergePropertiesIntoMap(paramarg0: Properties, paramarg1: Map<Object | null, Object | null>): void;
    static nullSafe(paramarg0: E[]): E[];
    static nullSafe(paramarg0: (Object | null)[]): (Object | null)[];
    static of(paramarg0: Object | null): (Object | null)[];
    static setOf(paramarg0: Object | null): (Object | null)[];
    static size(paramarg0: E[]): number;
    static size(paramarg0: Map<Object | null, Object | null>): number;
    static toArray(paramarg0: Enumeration<Object>, paramarg1: Object | null): Object | null;
    static toIterator(paramarg0: Enumeration<Object>): Iterator<Object>;
    private constructor()
}