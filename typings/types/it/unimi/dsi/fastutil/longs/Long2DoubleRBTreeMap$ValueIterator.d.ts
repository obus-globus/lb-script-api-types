import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Long2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleRBTreeMap$ValueIterator extends Long2DoubleRBTreeMap$TreeIterator implements DoubleListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}