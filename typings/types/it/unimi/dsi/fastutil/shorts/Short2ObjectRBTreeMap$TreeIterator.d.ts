import type { Short2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Short2ObjectRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Short2ObjectRBTreeMap$Entry<V>;
    // private prev: Short2ObjectRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Short2ObjectRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Short2ObjectRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}