import type { Float2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2ReferenceRBTreeMap$KeyIterator extends Float2ReferenceRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2ReferenceRBTreeMap$KeyIterator)
    constructor(null_: Float2ReferenceRBTreeMap$KeyIterator, arg1: number)
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