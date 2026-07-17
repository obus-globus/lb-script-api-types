import type { Char2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntRBTreeMap$TreeIterator.d.ts'
import type { IntListIterator } from '../../../../../it/unimi/dsi/fastutil/ints/IntListIterator.d.ts'
export class Char2IntRBTreeMap$ValueIterator extends Char2IntRBTreeMap$TreeIterator implements IntListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: number): void;
    next(): number;
    nextInt(): number;
    previous(): number;
    previousInt(): number;
    remove(): void;
    set(arg0: number): void;
}