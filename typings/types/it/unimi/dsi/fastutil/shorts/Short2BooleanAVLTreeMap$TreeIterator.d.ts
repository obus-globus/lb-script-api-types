import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Short2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Short2BooleanAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2BooleanAVLTreeMap$Entry;
    // private prev: Short2BooleanAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2BooleanAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2BooleanAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}