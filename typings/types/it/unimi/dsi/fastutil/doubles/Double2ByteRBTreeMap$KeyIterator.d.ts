import type { Double2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteRBTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export class Double2ByteRBTreeMap$KeyIterator extends Double2ByteRBTreeMap$TreeIterator implements DoubleListIterator {
    constructor(null_: Double2ByteRBTreeMap$KeyIterator)
    constructor(null_: Double2ByteRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}