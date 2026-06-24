import type { Long2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Long2BooleanAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2BooleanAVLTreeMap$Entry;
    // private prev: Long2BooleanAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2BooleanAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2BooleanAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}