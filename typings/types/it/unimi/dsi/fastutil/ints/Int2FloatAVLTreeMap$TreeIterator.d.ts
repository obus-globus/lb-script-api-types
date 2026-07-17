import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Int2FloatAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2FloatAVLTreeMap$Entry;
    // private prev: Int2FloatAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2FloatAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2FloatAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}