import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Comparators extends Object {
    static emptiesFirst<T extends unknown>(paramvalueComparator: (param0: Object, param1: Object) => number): (param0: Optional<T>, param1: Optional<T>) => number;
    static emptiesLast<T extends unknown>(paramvalueComparator: (param0: Object, param1: Object) => number): (param0: Optional<T>, param1: Optional<T>) => number;
    static greatest<T extends unknown>(paramk: number, paramcomparator: (param0: Object, param1: Object) => number): Collector<T, Object, T[]>;
    static isInOrder<T extends unknown>(paramiterable: T[], paramcomparator: (param0: T, param1: T) => number): boolean;
    static isInStrictOrder<T extends unknown>(paramiterable: T[], paramcomparator: (param0: T, param1: T) => number): boolean;
    static least<T extends unknown>(paramk: number, paramcomparator: (param0: Object, param1: Object) => number): Collector<T, Object, T[]>;
    static lexicographical<T extends unknown, S extends T>(paramcomparator: (param0: T, param1: T) => number): (param0: S[], param1: S[]) => number;
    static max<T extends Comparable<Object>>(parama: T, paramb: T): T;
    static max<T extends unknown>(parama: T, paramb: T, paramcomparator: (param0: Object, param1: Object) => number): T;
    static min<T extends Comparable<Object>>(parama: T, paramb: T): T;
    static min<T extends unknown>(parama: T, paramb: T, paramcomparator: (param0: Object, param1: Object) => number): T;
    private constructor()
}