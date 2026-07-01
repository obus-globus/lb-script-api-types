import type { Float2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongAVLTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongAVLTreeMap$ValueIterator extends Float2LongAVLTreeMap$TreeIterator implements LongListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}