import type { Char2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2CharRBTreeMap$KeyIterator extends Char2CharRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2CharRBTreeMap$KeyIterator)
    constructor(null_: Char2CharRBTreeMap$KeyIterator, arg1: string)
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