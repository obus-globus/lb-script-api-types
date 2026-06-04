import type { Float2ReferenceAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2ReferenceAVLTreeMap$KeyIterator extends Float2ReferenceAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2ReferenceAVLTreeMap$KeyIterator)
    constructor(null_: Float2ReferenceAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}