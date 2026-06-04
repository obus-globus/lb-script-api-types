import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Object2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatRBTreeMap$TreeIterator.d.ts'
export class Object2FloatRBTreeMap$ValueIterator extends Object2FloatRBTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: Object2FloatRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}