import type { Float2ReferenceAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ReferenceAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ReferenceAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Float2ReferenceAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Float2ReferenceAVLTreeMap$Entry<V>;
    // private prev: Float2ReferenceAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Float2ReferenceAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Float2ReferenceAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}