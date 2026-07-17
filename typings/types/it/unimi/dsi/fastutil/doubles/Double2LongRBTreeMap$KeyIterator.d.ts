import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongRBTreeMap$TreeIterator.d.ts'
import type { DoubleListIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleListIterator.d.ts'
export class Double2LongRBTreeMap$KeyIterator extends Double2LongRBTreeMap$TreeIterator implements DoubleListIterator {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    add(arg0: number): void;
    next(): number;
    nextDouble(): number;
    previous(): number;
    previousDouble(): number;
    remove(): void;
    set(arg0: number): void;
}