import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { SortedLists$KeyAbsentBehavior } from '../../../../com/google/common/collect/SortedLists$KeyAbsentBehavior.d.ts'
import type { SortedLists$KeyPresentBehavior } from '../../../../com/google/common/collect/SortedLists$KeyPresentBehavior.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SortedLists extends Object {
    static binarySearch(paramlist: (Object | null)[], parame: Object | null, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    static binarySearch(paramlist: (Object | null)[], paramkeyFunction: (param0: Object) => boolean, paramkey: Object | null, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    static binarySearch(paramlist: (Object | null)[], paramkeyFunction: (param0: Object) => boolean, paramkey: Object | null, paramkeyComparator: (param0: Object) => boolean, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    static binarySearch(paramlist: (Object | null)[], paramkey: Object | null, paramcomparator: (param0: Object) => boolean, parampresentBehavior: SortedLists$KeyPresentBehavior, paramabsentBehavior: SortedLists$KeyAbsentBehavior): number;
    private constructor()
}