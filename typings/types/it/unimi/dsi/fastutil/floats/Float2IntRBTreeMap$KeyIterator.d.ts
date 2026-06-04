import type { Float2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2IntRBTreeMap$KeyIterator extends Float2IntRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2IntRBTreeMap$KeyIterator)
    constructor(null_: Float2IntRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}