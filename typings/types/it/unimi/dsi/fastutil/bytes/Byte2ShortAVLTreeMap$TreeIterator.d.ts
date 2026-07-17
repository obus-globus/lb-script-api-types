import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ShortAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ShortAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ShortAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Byte2ShortAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2ShortAVLTreeMap$Entry;
    // private prev: Byte2ShortAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2ShortAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2ShortAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}