import type { Char2DoubleAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2DoubleAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2DoubleAVLTreeMap$KeyIterator extends Char2DoubleAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2DoubleAVLTreeMap$KeyIterator)
    constructor(null_: Char2DoubleAVLTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}