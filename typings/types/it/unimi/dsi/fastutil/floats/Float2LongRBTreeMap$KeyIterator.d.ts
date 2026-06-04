import type { Float2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2LongRBTreeMap$KeyIterator extends Float2LongRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2LongRBTreeMap$KeyIterator)
    constructor(null_: Float2LongRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}