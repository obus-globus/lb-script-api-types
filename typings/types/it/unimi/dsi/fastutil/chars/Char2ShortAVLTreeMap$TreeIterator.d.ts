import type { Char2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2ShortAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2ShortAVLTreeMap$Entry;
    // private prev: Char2ShortAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2ShortAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2ShortAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}