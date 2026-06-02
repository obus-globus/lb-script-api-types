import type { Char2BooleanAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2BooleanAVLTreeMap$KeyIterator extends Char2BooleanAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: Char2BooleanAVLTreeMap$KeyIterator)
    constructor(null_: Char2BooleanAVLTreeMap$KeyIterator, arg1: string)
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