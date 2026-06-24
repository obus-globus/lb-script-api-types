import type { Double2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: { [key: string]: any })
    constructor(null_: { [key: string]: any }, arg1: number)
    // private curr: Double2ByteAVLTreeMap$Entry;
    // private index: number;
    // private next: Double2ByteAVLTreeMap$Entry;
    // private prev: Double2ByteAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Double2ByteAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Double2ByteAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}