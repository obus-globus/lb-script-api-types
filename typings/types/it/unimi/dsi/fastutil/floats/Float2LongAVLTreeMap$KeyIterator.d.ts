import type { Float2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2LongAVLTreeMap$KeyIterator extends Float2LongAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}