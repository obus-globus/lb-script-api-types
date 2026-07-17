import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enumeration } from '../../../java/util/Enumeration.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class Collections extends Object {
    static arrayToList(paramarg0: Object): (Object | null)[];
    static asSet<T extends unknown>(paramarg0: T[]): T[];
    static concat<T extends unknown>(paramarg0: T[], ...paramarg1: T[]): T[];
    static contains(paramarg0: Enumeration<Object>, paramarg1: Object): boolean;
    static contains(paramarg0: Iterator<Object>, paramarg1: Object): boolean;
    static containsAny(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): boolean;
    static containsInstance(paramarg0: (Object | null)[], paramarg1: Object): boolean;
    static emptyList<T extends unknown>(): T[];
    static emptyMap<K extends unknown, V extends unknown>(): JavaMap<K, V>;
    static emptySet<T extends unknown>(): T[];
    static findCommonElementType(paramarg0: (Object | null)[]): Class<Object>;
    static findFirstMatch(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): Object;
    static findValueOfType<T extends unknown>(paramarg0: Object[], paramarg1: Class<T>): T;
    static findValueOfType(paramarg0: Object[], paramarg1: Class<Object>[]): Object;
    static hasUniqueObject(paramarg0: (Object | null)[]): boolean;
    static immutable<K extends unknown, V extends unknown>(paramarg0: JavaMap<K, V>): JavaMap<K, V>;
    static immutable<T extends unknown, C extends T[]>(paramarg0: C): C;
    static immutable<T extends unknown>(paramarg0: T[]): T[];
    static isEmpty(paramarg0: Object[]): boolean;
    static isEmpty(paramarg0: JavaMap<Object, Object>): boolean;
    static mergeArrayIntoCollection(paramarg0: Object, paramarg1: (Object | null)[]): void;
    static mergePropertiesIntoMap(paramarg0: JavaMap<any, any>, paramarg1: JavaMap<Object | null, Object | null>): void;
    static nullSafe<T extends unknown>(paramarg0: T[]): T[];
    static of<T extends unknown>(...paramarg0: T[]): T[];
    static setOf<T extends unknown>(...paramarg0: T[]): T[];
    static size(paramarg0: Object[]): number;
    static size(paramarg0: JavaMap<Object, Object>): number;
    static toArray<A extends unknown, E extends A>(paramarg0: Enumeration<E>, paramarg1: A[]): A[];
    static toIterator<E extends unknown>(paramarg0: Enumeration<E>): Iterator<E>;
    private constructor()
}