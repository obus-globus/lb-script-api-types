import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Float2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Float2BooleanAVLTreeMap$Entry;
    // private index: number;
    // private next: Float2BooleanAVLTreeMap$Entry;
    // private prev: Float2BooleanAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Float2BooleanAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Float2BooleanAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}