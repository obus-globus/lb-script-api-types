import type { Byte2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharRBTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Byte2CharRBTreeMap$ValueIterator extends Byte2CharRBTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}