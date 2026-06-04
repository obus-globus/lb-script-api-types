import type { Float2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2ShortRBTreeMap$KeyIterator extends Float2ShortRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2ShortRBTreeMap$KeyIterator)
    constructor(null_: Float2ShortRBTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}