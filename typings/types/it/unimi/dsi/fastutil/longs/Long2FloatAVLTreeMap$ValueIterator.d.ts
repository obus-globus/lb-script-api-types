import type { FloatListIterator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatListIterator.d.ts'
import type { Long2FloatAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatAVLTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2FloatAVLTreeMap$ValueIterator extends Long2FloatAVLTreeMap$TreeIterator implements FloatListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextFloat(): number;
    previous(): number;
    previousFloat(): number;
    remove(): void;
    set(arg0: number): void;
}