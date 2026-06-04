import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Double2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanAVLTreeMap$TreeIterator.d.ts'
export class Double2BooleanAVLTreeMap$ValueIterator extends Double2BooleanAVLTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: Double2BooleanAVLTreeMap$ValueIterator)
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}