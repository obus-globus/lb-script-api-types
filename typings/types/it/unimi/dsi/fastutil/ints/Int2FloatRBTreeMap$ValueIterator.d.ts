import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Int2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatRBTreeMap$TreeIterator.d.ts'
export class Int2FloatRBTreeMap$ValueIterator extends Int2FloatRBTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}