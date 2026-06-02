import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Collections2 extends Object {
    static filter(paramunfiltered: E[], parampredicate: (param0: Object | null) => kotlin.Boolean): E[];
    static orderedPermutations(paramelements: (Object | null)[]): E[];
    static orderedPermutations(paramelements: (Object | null)[], paramcomparator: (param0: Object | null) => kotlin.Boolean): E[];
    static permutations(paramelements: E[]): E[];
    static transform(paramfromCollection: E[], paramfunction: (param0: Object | null) => Object | null): E[];
    private constructor()
}