import type { Float2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2FloatRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
export class Float2FloatRBTreeMap$ValueIterator extends Float2FloatRBTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}