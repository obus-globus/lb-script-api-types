import type { Float2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntRBTreeMap$ValueIterator extends Float2IntRBTreeMap$TreeIterator implements IntListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}