import type { Char2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongRBTreeMap$TreeIterator.d.ts'
import type { LongListIterator } from '../../../../../it/unimi/dsi/fastutil/longs/LongListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2LongRBTreeMap$ValueIterator extends Char2LongRBTreeMap$TreeIterator implements LongListIterator {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextLong(): number;
    previous(): number;
    previousLong(): number;
    remove(): void;
    set(arg0: number): void;
}