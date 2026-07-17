import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Int2CharAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Int2CharAVLTreeMap$Entry;
    // private index: number;
    // private next: Int2CharAVLTreeMap$Entry;
    // private prev: Int2CharAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Int2CharAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Int2CharAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}