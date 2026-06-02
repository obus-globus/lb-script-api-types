import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Collections2$PermutationIterator<E extends Object | number | string | boolean> extends AbstractIterator<E[]> {
    constructor(list: E[])
    // private c: number[];
    // private j: number;
    // private list: E[];
    // private o: number[];
    calculateNextPermutation(): void;
    computeNext(): E[];
    switchDirection(): void;
}