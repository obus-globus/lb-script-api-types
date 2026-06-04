import type { Float2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2DoubleAVLTreeMap$KeyIterator extends Float2DoubleAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2DoubleAVLTreeMap$KeyIterator)
    constructor(null_: Float2DoubleAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}