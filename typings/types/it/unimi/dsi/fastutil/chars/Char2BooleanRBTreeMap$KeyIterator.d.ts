import type { Char2BooleanRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2BooleanRBTreeMap$KeyIterator extends Char2BooleanRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2BooleanRBTreeMap$KeyIterator)
    constructor(null_: Char2BooleanRBTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}