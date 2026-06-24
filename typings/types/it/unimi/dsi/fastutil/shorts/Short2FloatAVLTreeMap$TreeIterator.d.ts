import type { Short2FloatAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2FloatAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2FloatAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Short2FloatAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2FloatAVLTreeMap$Entry;
    // private prev: Short2FloatAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2FloatAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2FloatAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}