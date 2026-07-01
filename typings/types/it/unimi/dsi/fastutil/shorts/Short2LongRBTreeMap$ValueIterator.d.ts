import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Short2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongRBTreeMap$ValueIterator extends Short2LongRBTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}