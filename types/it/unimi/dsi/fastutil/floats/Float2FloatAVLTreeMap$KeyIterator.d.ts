import type { Float2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2FloatAVLTreeMap$KeyIterator extends Float2FloatAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2FloatAVLTreeMap$KeyIterator)
    constructor(null_: Float2FloatAVLTreeMap$KeyIterator, arg1: number)
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