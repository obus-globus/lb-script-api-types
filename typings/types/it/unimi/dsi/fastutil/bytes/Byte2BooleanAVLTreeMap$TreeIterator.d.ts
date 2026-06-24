import type { Byte2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Byte2BooleanAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2BooleanAVLTreeMap$Entry;
    // private prev: Byte2BooleanAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2BooleanAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2BooleanAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}