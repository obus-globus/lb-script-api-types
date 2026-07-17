import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Double2CharRBTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharRBTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2CharRBTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Double2CharRBTreeMap$Entry;
    // private index: number;
    // private next: Double2CharRBTreeMap$Entry;
    // private prev: Double2CharRBTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2CharRBTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2CharRBTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}