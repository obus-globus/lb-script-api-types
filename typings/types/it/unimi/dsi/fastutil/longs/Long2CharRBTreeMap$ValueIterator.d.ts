import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Long2CharRBTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharRBTreeMap$TreeIterator.d.ts'
export class Long2CharRBTreeMap$ValueIterator extends Long2CharRBTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}