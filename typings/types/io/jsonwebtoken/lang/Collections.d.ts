import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class Collections extends Object {
    static arrayToList(paramarg0: Object): (Object | null)[];
    static asSet(paramarg0: (Object | null)[]): (Object | null)[];
    static concat(paramarg0: (Object | null)[], paramarg1: Object | null): (Object | null)[];
    static contains(paramarg0: Enumeration<Object>, paramarg1: Object): boolean;
    static contains(paramarg0: Iterator<Object>, paramarg1: Object): boolean;
    static containsAny(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): boolean;
    static containsInstance(paramarg0: (Object | null)[], paramarg1: Object): boolean;
    static emptyList(): (Object | null)[];
    static emptyMap(): Map<Object | null, Object | null>;
    static emptySet(): (Object | null)[];
    static findCommonElementType(paramarg0: (Object | null)[]): Class<Object>;
    static findFirstMatch(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): Object;
    static findValueOfType(paramarg0: Object[], paramarg1: Class<Object>): Object | null;
    static findValueOfType(paramarg0: Object[], paramarg1: Object | null): Object;
    static hasUniqueObject(paramarg0: (Object | null)[]): boolean;
    static immutable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static immutable(paramarg0: Object | null): Object | null;
    static immutable(paramarg0: (Object | null)[]): (Object | null)[];
    static immutable(paramarg0: (Object | null)[]): (Object | null)[];
    static isEmpty(paramarg0: Object[]): boolean;
    static isEmpty(paramarg0: Map<Object, Object>): boolean;
    static mergeArrayIntoCollection(paramarg0: Object, paramarg1: (Object | null)[]): void;
    static mergePropertiesIntoMap(paramarg0: Properties, paramarg1: Map<Object | null, Object | null>): void;
    static nullSafe(paramarg0: (Object | null)[]): (Object | null)[];
    static nullSafe(paramarg0: (Object | null)[]): (Object | null)[];
    static of(paramarg0: Object | null): (Object | null)[];
    static setOf(paramarg0: Object | null): (Object | null)[];
    static size(paramarg0: Object[]): number;
    static size(paramarg0: Map<Object, Object>): number;
    static toArray(paramarg0: Enumeration<Object>, paramarg1: Object | null): Object | null;
    static toIterator(paramarg0: Enumeration<Object>): Iterator<Object>;
    private constructor()
}