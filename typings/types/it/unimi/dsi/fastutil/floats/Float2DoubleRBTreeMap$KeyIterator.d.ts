import type { Float2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2DoubleRBTreeMap$KeyIterator extends Float2DoubleRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2DoubleRBTreeMap$KeyIterator)
    constructor(null_: Float2DoubleRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
    set(arg0: number): void;
}