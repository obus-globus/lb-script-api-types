import type { Double2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Double2BooleanAVLTreeMap$Entry;
    // private index: number;
    // private next: Double2BooleanAVLTreeMap$Entry;
    // private prev: Double2BooleanAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2BooleanAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2BooleanAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}