import type { Byte2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Byte2FloatAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2FloatAVLTreeMap$Entry;
    // private prev: Byte2FloatAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2FloatAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2FloatAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}