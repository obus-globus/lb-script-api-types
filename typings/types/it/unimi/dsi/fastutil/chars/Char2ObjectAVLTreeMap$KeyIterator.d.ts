import type { Char2ObjectAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2ObjectAVLTreeMap$KeyIterator extends Char2ObjectAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2ObjectAVLTreeMap$KeyIterator)
    constructor(null_: Char2ObjectAVLTreeMap$KeyIterator, arg1: string)
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