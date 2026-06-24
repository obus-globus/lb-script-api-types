import type { Double2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Double2FloatAVLTreeMap$Entry;
    // private index: number;
    // private next: Double2FloatAVLTreeMap$Entry;
    // private prev: Double2FloatAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2FloatAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2FloatAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}