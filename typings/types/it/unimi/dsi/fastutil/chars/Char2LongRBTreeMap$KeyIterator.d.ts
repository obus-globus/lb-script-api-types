import type { Char2LongRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2LongRBTreeMap$KeyIterator extends Char2LongRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2LongRBTreeMap$KeyIterator)
    constructor(null_: Char2LongRBTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}