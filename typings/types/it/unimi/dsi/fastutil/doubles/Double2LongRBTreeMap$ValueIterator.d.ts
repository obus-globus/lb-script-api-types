import type { Double2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
export class Double2LongRBTreeMap$ValueIterator extends Double2LongRBTreeMap$TreeIterator implements LongListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}