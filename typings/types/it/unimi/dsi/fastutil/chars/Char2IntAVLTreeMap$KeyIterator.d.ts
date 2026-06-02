import type { Char2IntAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2IntAVLTreeMap$KeyIterator extends Char2IntAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2IntAVLTreeMap$KeyIterator)
    constructor(null_: Char2IntAVLTreeMap$KeyIterator, arg1: string)
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