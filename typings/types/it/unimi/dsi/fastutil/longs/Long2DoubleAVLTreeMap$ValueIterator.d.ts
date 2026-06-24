import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
import type { Long2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2DoubleAVLTreeMap$ValueIterator extends Long2DoubleAVLTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}