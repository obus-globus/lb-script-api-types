import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Long2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Long2ByteAVLTreeMap$Entry;
    // private index: number;
    // private next: Long2ByteAVLTreeMap$Entry;
    // private prev: Long2ByteAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Long2ByteAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Long2ByteAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}