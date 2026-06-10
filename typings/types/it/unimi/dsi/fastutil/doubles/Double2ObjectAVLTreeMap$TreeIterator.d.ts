import type { Double2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: Double2ObjectAVLTreeMap$TreeIterator)
    constructor(null_: Double2ObjectAVLTreeMap$TreeIterator, arg1: number)
    // private curr: Double2ObjectAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Double2ObjectAVLTreeMap$Entry<V>;
    // private prev: Double2ObjectAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends Object | number | string | boolean>(): Double2ObjectAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends Object | number | string | boolean>(): Double2ObjectAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}