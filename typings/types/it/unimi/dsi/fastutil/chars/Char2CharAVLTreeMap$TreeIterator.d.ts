import type { Char2CharAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2CharAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2CharAVLTreeMap$Entry;
    // private prev: Char2CharAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2CharAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2CharAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}