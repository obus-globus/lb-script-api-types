import type { Float2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatAVLTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2FloatAVLTreeMap$ValueIterator extends Float2FloatAVLTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: Float2FloatAVLTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}