import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2DoubleAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2DoubleAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2DoubleAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Byte2DoubleAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2DoubleAVLTreeMap$Entry;
    // private prev: Byte2DoubleAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2DoubleAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2DoubleAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}