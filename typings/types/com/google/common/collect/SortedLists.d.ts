import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { SortedLists$KeyAbsentBehavior } from '../../../../com/google/common/collect/SortedLists$KeyAbsentBehavior.d.ts'
import type { SortedLists$KeyPresentBehavior } from '../../../../com/google/common/collect/SortedLists$KeyPresentBehavior.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class SortedLists extends Object {
    static binarySearch<E extends Comparable<Object>>(paramlist: E[], parame: E, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    static binarySearch<E extends unknown, K extends Comparable<Object>>(paramlist: E[], paramkeyFunction: (param0: Object) => K, paramkey: K, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    static binarySearch<E extends unknown, K extends unknown>(paramlist: E[], paramkeyFunction: (param0: Object) => K, paramkey: K, paramkeyComparator: (param0: Object, param1: Object) => number, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    static binarySearch<E extends unknown>(paramlist: E[], paramkey: E, paramcomparator: (param0: Object, param1: Object) => number, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    private constructor()
}