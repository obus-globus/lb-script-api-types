import type { Char2ShortAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ShortAVLTreeMap$KeyIterator extends Char2ShortAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2ShortAVLTreeMap$KeyIterator)
    constructor(null_: Char2ShortAVLTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}