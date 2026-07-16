import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Collections2 extends Object {
    static filter(paramunfiltered: (Object | null)[], parampredicate: (param0: Object) => boolean): (Object | null)[];
    static orderedPermutations(paramelements: (Object | null)[]): (Object | null)[][];
    static orderedPermutations(paramelements: (Object | null)[], paramcomparator: (param0: Object, param1: Object) => number): (Object | null)[][];
    static permutations(paramelements: (Object | null)[]): (Object | null)[][];
    static transform(paramfromCollection: (Object | null)[], paramfunction: (param0: Object) => Object | null): (Object | null)[];
    private constructor()
}