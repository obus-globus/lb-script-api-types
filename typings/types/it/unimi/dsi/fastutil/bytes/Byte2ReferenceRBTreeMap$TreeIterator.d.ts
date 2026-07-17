import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ReferenceRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ReferenceRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ReferenceRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Byte2ReferenceRBTreeMap$Entry<V>;
    // private index: number;
    // private next: Byte2ReferenceRBTreeMap$Entry<V>;
    // private prev: Byte2ReferenceRBTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Byte2ReferenceRBTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Byte2ReferenceRBTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}