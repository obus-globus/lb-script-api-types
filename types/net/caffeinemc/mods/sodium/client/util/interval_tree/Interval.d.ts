import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Interval$Bounded } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/Interval$Bounded.d.ts'
import type { Interval$Unbounded } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/Interval$Unbounded.d.ts'
export abstract class Interval<T extends Comparable<T>> extends Object {
    static sweepLeftToRight: (param0: Interval<Object>) => kotlin.Boolean;
    static sweepRightToLeft: (param0: Interval<Object>) => kotlin.Boolean;
    constructor()
    constructor(arg0: T, arg1: T, arg2: Interval$Bounded)
    constructor(arg0: T, arg1: Interval$Unbounded)
    readonly end: T;
    // private isEndInclusive: boolean;
    // private isStartInclusive: boolean;
    readonly start: T;
    // private compareEnds(arg0: Interval<T>): number;
    compareSpecialization(arg0: Interval<T>): number;
    // private compareStarts(arg0: Interval<T>): number;
    contains(arg0: T): boolean;
    create(): Interval<T>;
    create(arg0: T, arg1: boolean, arg2: T, arg3: boolean): Interval<T>;
    equals(arg0: Object | null): boolean;
    getEnd(): T;
    getIntersection(arg0: Interval<T>): Interval<T>;
    getMidpoint(): T;
    getStart(): T;
    hashCode(): number;
    intersects(arg0: Interval<T>): boolean;
    isEmpty(): boolean;
    isEndInclusive(): boolean;
    isLeftOf(arg0: T): boolean;
    isLeftOf(arg0: T, arg1: boolean): boolean;
    isLeftOf(arg0: Interval<T>): boolean;
    isRightOf(arg0: T): boolean;
    isRightOf(arg0: T, arg1: boolean): boolean;
    isRightOf(arg0: Interval<T>): boolean;
    isStartInclusive(): boolean;
}