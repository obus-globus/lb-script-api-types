import type { Int2ShortRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortRBTreeMap$TreeIterator.d.ts'
import type { ShortListIterator } from '../../../../../it/unimi/dsi/fastutil/shorts/ShortListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortRBTreeMap$ValueIterator extends Int2ShortRBTreeMap$TreeIterator implements ShortListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextShort(): number;
    previous(): number;
    previousShort(): number;
    remove(): void;
    set(arg0: number): void;
}