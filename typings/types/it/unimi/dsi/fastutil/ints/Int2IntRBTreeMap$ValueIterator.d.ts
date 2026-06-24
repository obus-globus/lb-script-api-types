import type { Int2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2IntRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2IntRBTreeMap$ValueIterator extends Int2IntRBTreeMap$TreeIterator implements IntListIterator {
    private constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}