import type { Float2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2ShortAVLTreeMap$KeyIterator extends Float2ShortAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2ShortAVLTreeMap$KeyIterator)
    constructor(null_: Float2ShortAVLTreeMap$KeyIterator, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}