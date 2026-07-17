import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2CharAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2CharAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2CharAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Byte2CharAVLTreeMap$Entry;
    // private index: number;
    // private next: Byte2CharAVLTreeMap$Entry;
    // private prev: Byte2CharAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Byte2CharAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Byte2CharAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}