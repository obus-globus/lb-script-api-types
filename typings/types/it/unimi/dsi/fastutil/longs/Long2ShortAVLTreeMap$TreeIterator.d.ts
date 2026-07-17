import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Long2ShortAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2ShortAVLTreeMap$Entry;
    // private prev: Long2ShortAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2ShortAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2ShortAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}