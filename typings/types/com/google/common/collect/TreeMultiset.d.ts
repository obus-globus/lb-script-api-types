import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class TreeMultiset<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends Comparable<Object>>(): E[];
    static create<E extends Comparable<Object>>(paramelements: E[]): E[];
    static create<E extends unknown>(paramcomparator: (param0: Object, param1: Object) => number): E[];
}