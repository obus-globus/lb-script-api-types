import type { Char2ByteAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ByteAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ByteAVLTreeMap$KeyIterator extends Char2ByteAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2ByteAVLTreeMap$KeyIterator)
    constructor(null_: Char2ByteAVLTreeMap$KeyIterator, arg1: string)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}