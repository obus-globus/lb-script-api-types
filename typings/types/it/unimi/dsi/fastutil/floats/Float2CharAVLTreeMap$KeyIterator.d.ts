import type { Float2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2CharAVLTreeMap$KeyIterator extends Float2CharAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: Float2CharAVLTreeMap$KeyIterator)
    constructor(null_: Float2CharAVLTreeMap$KeyIterator, arg1: number)
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