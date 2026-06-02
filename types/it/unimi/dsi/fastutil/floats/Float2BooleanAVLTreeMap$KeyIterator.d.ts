import type { Float2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2BooleanAVLTreeMap$KeyIterator extends Float2BooleanAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2BooleanAVLTreeMap$KeyIterator)
    constructor(null_: Float2BooleanAVLTreeMap$KeyIterator, arg1: number)
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