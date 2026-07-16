import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SortedIterables extends Object {
    static comparator<E extends unknown>(paramsortedSet: E[]): (param0: Object, param1: Object) => number;
    static hasSameComparator(paramcomparator: (param0: Object, param1: Object) => number, paramelements: Object[]): boolean;
    private constructor()
}