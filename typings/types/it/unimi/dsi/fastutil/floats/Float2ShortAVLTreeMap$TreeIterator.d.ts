import type { Float2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Float2ShortAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2ShortAVLTreeMap$Entry;
    // private prev: Float2ShortAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2ShortAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2ShortAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}