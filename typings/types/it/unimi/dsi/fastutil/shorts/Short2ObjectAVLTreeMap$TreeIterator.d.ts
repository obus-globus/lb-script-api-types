import type { Short2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Short2ObjectAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Short2ObjectAVLTreeMap$Entry<V>;
    // private prev: Short2ObjectAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Short2ObjectAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Short2ObjectAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}