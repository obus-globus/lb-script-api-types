import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Long2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatRBTreeMap$TreeIterator.d.ts'
export class Long2FloatRBTreeMap$ValueIterator extends Long2FloatRBTreeMap$TreeIterator implements FloatListIterator {
    private constructor(null_: JavaMap<any, any>)
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}