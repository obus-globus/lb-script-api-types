import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class Collections2 extends Object {
    static filter<E extends unknown>(paramunfiltered: E[], parampredicate: (param0: Object) => boolean): E[];
    static orderedPermutations<E extends Comparable<Object>>(paramelements: E[]): E[][];
    static orderedPermutations<E extends unknown>(paramelements: E[], paramcomparator: (param0: Object, param1: Object) => number): E[][];
    static permutations<E extends unknown>(paramelements: E[]): E[][];
    static transform<F extends unknown, T extends unknown>(paramfromCollection: F[], paramfunction: (param0: Object) => T): T[];
    private constructor()
}