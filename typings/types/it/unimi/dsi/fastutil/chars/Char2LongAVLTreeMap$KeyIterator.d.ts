import type { Char2LongAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2LongAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2LongAVLTreeMap$KeyIterator extends Char2LongAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2LongAVLTreeMap$KeyIterator)
    constructor(null_: Char2LongAVLTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}