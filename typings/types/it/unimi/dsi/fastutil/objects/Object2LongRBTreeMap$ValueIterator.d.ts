import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Object2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2LongRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2LongRBTreeMap$ValueIterator extends Object2LongRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}