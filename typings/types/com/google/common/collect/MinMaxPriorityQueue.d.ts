import type { MinMaxPriorityQueue$Builder } from '../../../../com/google/common/collect/MinMaxPriorityQueue$Builder.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class MinMaxPriorityQueue<E extends unknown> {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static create<E extends Comparable<E>>(): E[];
    static create<E extends Comparable<E>>(paraminitialContents: E[]): E[];
    static expectedSize(paramexpectedSize: number): MinMaxPriorityQueue$Builder<Comparable<Object>>;
    static maximumSize(parammaximumSize: number): MinMaxPriorityQueue$Builder<Comparable<Object>>;
    static orderedBy<B extends unknown>(paramcomparator: (param0: B, param1: B) => number): MinMaxPriorityQueue$Builder<B>;
}