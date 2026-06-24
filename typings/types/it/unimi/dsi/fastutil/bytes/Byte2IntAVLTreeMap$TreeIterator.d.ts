import type { Byte2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Byte2IntAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2IntAVLTreeMap$Entry;
    // private prev: Byte2IntAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2IntAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2IntAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}