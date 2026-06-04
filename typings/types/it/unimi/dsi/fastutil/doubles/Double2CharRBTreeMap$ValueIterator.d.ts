import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Double2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharRBTreeMap$TreeIterator.d.ts'
export class Double2CharRBTreeMap$ValueIterator extends Double2CharRBTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: Double2CharRBTreeMap$ValueIterator)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}