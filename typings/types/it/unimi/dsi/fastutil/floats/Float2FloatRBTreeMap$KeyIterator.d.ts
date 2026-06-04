import type { Float2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2FloatRBTreeMap$KeyIterator extends Float2FloatRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2FloatRBTreeMap$KeyIterator)
    constructor(null_: Float2FloatRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}