import type { Char2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: string)
    // private curr: Char2IntAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2IntAVLTreeMap$Entry;
    // private prev: Char2IntAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2IntAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2IntAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}