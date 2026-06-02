import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SortedIterables extends Object {
    static comparator(paramsortedSet: (Object | null)[]): (param0: Object | null) => kotlin.Boolean;
    static hasSameComparator(paramcomparator: (param0: Object | null) => kotlin.Boolean, paramelements: (Object | null)[]): boolean;
    private constructor()
}