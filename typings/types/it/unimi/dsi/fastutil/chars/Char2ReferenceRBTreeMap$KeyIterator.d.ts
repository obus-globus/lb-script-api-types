import type { Char2ReferenceRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ReferenceRBTreeMap$KeyIterator extends Char2ReferenceRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2ReferenceRBTreeMap$KeyIterator)
    constructor(null_: Char2ReferenceRBTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}