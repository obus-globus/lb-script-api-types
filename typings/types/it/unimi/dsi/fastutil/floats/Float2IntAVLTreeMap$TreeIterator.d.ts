import type { Float2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Float2IntAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2IntAVLTreeMap$Entry;
    // private prev: Float2IntAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2IntAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2IntAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}