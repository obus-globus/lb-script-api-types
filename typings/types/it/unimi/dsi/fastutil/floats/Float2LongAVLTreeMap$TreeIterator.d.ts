import type { Float2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Float2LongAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2LongAVLTreeMap$Entry;
    // private prev: Float2LongAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2LongAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2LongAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}