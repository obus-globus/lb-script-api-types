import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2IntAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2IntAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2IntAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2IntAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2IntAVLTreeMap$Entry;
    // private prev: Short2IntAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2IntAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2IntAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}