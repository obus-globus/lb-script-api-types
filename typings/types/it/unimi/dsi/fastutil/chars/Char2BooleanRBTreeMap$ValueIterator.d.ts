import type { BooleanListIterator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanListIterator.d.ts'
import type { Char2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanRBTreeMap$TreeIterator.d.ts'
export class Char2BooleanRBTreeMap$ValueIterator extends Char2BooleanRBTreeMap$TreeIterator implements BooleanListIterator {
    private constructor(null_: Char2BooleanRBTreeMap$ValueIterator)
    add(arg0: boolean): void;
    next(): boolean;
    nextBoolean(): boolean;
    previous(): boolean;
    previousBoolean(): boolean;
    remove(): void;
    set(arg0: boolean): void;
}