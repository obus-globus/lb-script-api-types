import type { Char2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharAVLTreeMap$TreeIterator.d.ts'
import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
export class Char2CharAVLTreeMap$ValueIterator extends Char2CharAVLTreeMap$TreeIterator implements CharListIterator {
    private constructor(null_: { [key: string]: any })
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}