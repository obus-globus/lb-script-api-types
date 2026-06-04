import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Float2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/floats/Float2CharAVLTreeMap$TreeIterator.d.ts'
export class Float2CharAVLTreeMap$ValueIterator extends Float2CharAVLTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: Float2CharAVLTreeMap$ValueIterator)
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}