import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Float2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharRBTreeMap$TreeIterator.d.ts'
export class Float2CharRBTreeMap$ValueIterator extends Float2CharRBTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: Float2CharRBTreeMap$ValueIterator)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}