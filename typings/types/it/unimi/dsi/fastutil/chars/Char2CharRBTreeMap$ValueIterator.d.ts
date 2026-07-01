import type { Char2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharRBTreeMap$ValueIterator extends Char2CharRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}