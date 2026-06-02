import type { Float2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Float2ByteAVLTreeMap$TreeIterator)
    constructor(null_: Float2ByteAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Float2ByteAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2ByteAVLTreeMap$Entry;
    // private prev: Float2ByteAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2ByteAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2ByteAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}