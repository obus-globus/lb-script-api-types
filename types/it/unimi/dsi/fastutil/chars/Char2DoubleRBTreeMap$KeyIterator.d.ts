import type { Char2DoubleRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2DoubleRBTreeMap$KeyIterator extends Char2DoubleRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2DoubleRBTreeMap$KeyIterator)
    constructor(null_: Char2DoubleRBTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
    set(arg0: string): void;
}