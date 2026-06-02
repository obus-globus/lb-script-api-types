import type { Double2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectRBTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export class Double2ObjectRBTreeMap$KeyIterator extends Double2ObjectRBTreeMap$TreeIterator implements DoubleListIterator {
    constructor(null_: Double2ObjectRBTreeMap$KeyIterator)
    constructor(null_: Double2ObjectRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}