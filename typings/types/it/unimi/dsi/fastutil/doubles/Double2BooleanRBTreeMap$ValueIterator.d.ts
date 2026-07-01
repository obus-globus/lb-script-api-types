import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Double2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanRBTreeMap$ValueIterator extends Double2BooleanRBTreeMap$TreeIterator implements BooleanListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}