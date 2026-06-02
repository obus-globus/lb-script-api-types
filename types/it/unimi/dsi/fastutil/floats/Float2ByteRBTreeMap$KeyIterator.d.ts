import type { Float2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2ByteRBTreeMap$KeyIterator extends Float2ByteRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2ByteRBTreeMap$KeyIterator)
    constructor(null_: Float2ByteRBTreeMap$KeyIterator, arg1: number)
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