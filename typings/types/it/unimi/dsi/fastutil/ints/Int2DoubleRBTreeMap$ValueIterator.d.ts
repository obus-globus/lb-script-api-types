import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Int2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleRBTreeMap$TreeIterator.d.ts'
export class Int2DoubleRBTreeMap$ValueIterator extends Int2DoubleRBTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}