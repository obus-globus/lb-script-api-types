import type { Float2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2ObjectAVLTreeMap$KeyIterator extends Float2ObjectAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2ObjectAVLTreeMap$KeyIterator)
    constructor(null_: Float2ObjectAVLTreeMap$KeyIterator, arg1: number)
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