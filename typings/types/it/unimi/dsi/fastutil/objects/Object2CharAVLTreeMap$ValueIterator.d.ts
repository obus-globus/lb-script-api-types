import type { CharListIterator } from '../../../../../it/unimi/dsi/fastutil/chars/CharListIterator.d.ts'
import type { Object2CharAVLTreeMap$TreeIterator } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharAVLTreeMap$TreeIterator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharAVLTreeMap$ValueIterator extends Object2CharAVLTreeMap$TreeIterator implements CharListIterator {
    constructor(null_: { [key: string]: any }, arg1: (Object | null)[])
    add(arg0: string): void;
    next(): string;
    nextChar(): string;
    previous(): string;
    previousChar(): string;
    remove(): void;
    set(arg0: string): void;
}