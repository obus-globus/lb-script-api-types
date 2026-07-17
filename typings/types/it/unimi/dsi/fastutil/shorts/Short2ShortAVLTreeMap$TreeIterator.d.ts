import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2ShortAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2ShortAVLTreeMap$Entry;
    // private prev: Short2ShortAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2ShortAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2ShortAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}