import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2LongAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2LongAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2LongAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2LongAVLTreeMap$Entry;
    // private prev: Short2LongAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2LongAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2LongAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}