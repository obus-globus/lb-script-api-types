import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Interval } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/interval_tree/Interval.d.ts'
export class TreeNode<T extends Comparable<T>> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static addInterval<T extends Comparable<Object>>(paramarg0: T[], paramarg1: Interval<T>[], paramarg2: Interval<T>): Interval<T>[];
    static removeInterval<T extends Comparable<Object>>(paramarg0: T[], paramarg1: Interval<T>[], paramarg2: Interval<T>): Interval<T>[];
}