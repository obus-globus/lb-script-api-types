import type { Char2IntRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2IntRBTreeMap$KeyIterator extends Char2IntRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2IntRBTreeMap$KeyIterator)
    constructor(null_: Char2IntRBTreeMap$KeyIterator, arg1: string)
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