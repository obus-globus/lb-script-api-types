import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ByteAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ByteAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ByteAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Byte2ByteAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2ByteAVLTreeMap$Entry;
    // private prev: Byte2ByteAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2ByteAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2ByteAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}