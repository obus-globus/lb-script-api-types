import type { Char2FloatRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2FloatRBTreeMap$KeyIterator extends Char2FloatRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2FloatRBTreeMap$KeyIterator)
    constructor(null_: Char2FloatRBTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}