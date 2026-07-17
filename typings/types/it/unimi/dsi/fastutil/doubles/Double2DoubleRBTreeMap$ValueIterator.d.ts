import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2DoubleRBTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export class Double2DoubleRBTreeMap$ValueIterator extends Double2DoubleRBTreeMap$TreeIterator implements DoubleListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}