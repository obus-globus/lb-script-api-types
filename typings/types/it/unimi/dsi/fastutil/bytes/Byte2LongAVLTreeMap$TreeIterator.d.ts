import type { Byte2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Byte2LongAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2LongAVLTreeMap$Entry;
    // private prev: Byte2LongAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2LongAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2LongAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}