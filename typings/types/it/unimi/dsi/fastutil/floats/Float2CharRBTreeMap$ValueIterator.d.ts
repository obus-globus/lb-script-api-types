import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Float2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharRBTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2CharRBTreeMap$ValueIterator extends Float2CharRBTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}