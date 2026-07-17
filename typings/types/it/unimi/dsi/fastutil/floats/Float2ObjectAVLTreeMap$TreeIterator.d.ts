import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2ObjectAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Float2ObjectAVLTreeMap$Entry<V>;
    // private prev: Float2ObjectAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Float2ObjectAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Float2ObjectAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}