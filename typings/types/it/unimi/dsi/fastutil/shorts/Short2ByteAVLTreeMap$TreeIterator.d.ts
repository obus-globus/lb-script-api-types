import type { Short2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Short2ByteAVLTreeMap$Entry;
    // private index: number;
    // private next: Short2ByteAVLTreeMap$Entry;
    // private prev: Short2ByteAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Short2ByteAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Short2ByteAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}