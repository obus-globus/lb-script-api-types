import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Double2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharAVLTreeMap$TreeIterator.d.ts'
export class Double2CharAVLTreeMap$ValueIterator extends Double2CharAVLTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: Double2CharAVLTreeMap$ValueIterator)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}