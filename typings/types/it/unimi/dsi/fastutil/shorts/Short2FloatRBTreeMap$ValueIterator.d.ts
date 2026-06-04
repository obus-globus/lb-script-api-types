import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Short2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatRBTreeMap$TreeIterator.d.ts'
export class Short2FloatRBTreeMap$ValueIterator extends Short2FloatRBTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: Short2FloatRBTreeMap$ValueIterator)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}