import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2ObjectRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Float2ObjectRBTreeMap$Entry<V>;
    // private prev: Float2ObjectRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Float2ObjectRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Float2ObjectRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}