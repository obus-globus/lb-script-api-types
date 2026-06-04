import type { Double2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2IntAVLTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export class Double2IntAVLTreeMap$KeyIterator extends Double2IntAVLTreeMap$TreeIterator implements DoubleListIterator {
    constructor(null_: Double2IntAVLTreeMap$KeyIterator)
    constructor(null_: Double2IntAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}