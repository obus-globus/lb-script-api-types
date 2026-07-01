import type { Double2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatRBTreeMap$TreeIterator.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatRBTreeMap$ValueIterator extends Double2FloatRBTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}