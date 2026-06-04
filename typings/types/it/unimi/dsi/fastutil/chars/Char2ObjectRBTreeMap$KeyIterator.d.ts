import type { Char2ObjectRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ObjectRBTreeMap$KeyIterator extends Char2ObjectRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2ObjectRBTreeMap$KeyIterator)
    constructor(null_: Char2ObjectRBTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}