import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Collections2$OrderedPermutationIterator<E extends Object | number | string | boolean> extends AbstractIterator<E[]> {
    constructor(list: E[], comparator: (param0: E) => kotlin.Boolean)
    // private comparator: (param0: E) => kotlin.Boolean;
    // private nextPermutation: E[];
    calculateNextPermutation(): void;
    computeNext(): E[];
    findNextJ(): number;
    findNextL(j: number): number;
}