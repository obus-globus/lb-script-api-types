import type { Double2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntRBTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export class Double2IntRBTreeMap$KeyIterator extends Double2IntRBTreeMap$TreeIterator implements DoubleListIterator {
    constructor(null_: Double2IntRBTreeMap$KeyIterator)
    constructor(null_: Double2IntRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}