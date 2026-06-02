import type { Char2ByteRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ByteRBTreeMap$KeyIterator extends Char2ByteRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2ByteRBTreeMap$KeyIterator)
    constructor(null_: Char2ByteRBTreeMap$KeyIterator, arg1: string)
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