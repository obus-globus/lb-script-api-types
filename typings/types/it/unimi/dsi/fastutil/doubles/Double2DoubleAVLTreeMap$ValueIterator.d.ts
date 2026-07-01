import type { Double2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2DoubleAVLTreeMap$ValueIterator extends Double2DoubleAVLTreeMap$TreeIterator implements DoubleListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}