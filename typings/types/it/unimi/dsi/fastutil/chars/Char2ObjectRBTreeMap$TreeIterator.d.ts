import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2ObjectRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ObjectRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2ObjectRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private curr: Char2ObjectRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Char2ObjectRBTreeMap$Entry<V>;
    // private prev: Char2ObjectRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Char2ObjectRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Char2ObjectRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}