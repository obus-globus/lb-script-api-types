import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Char2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: string)
    // private curr: Char2BooleanAVLTreeMap$Entry;
    // private index: number;
    // private next: Char2BooleanAVLTreeMap$Entry;
    // private prev: Char2BooleanAVLTreeMap$Entry;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry(): Char2BooleanAVLTreeMap$Entry;
    nextIndex(): number;
    previousEntry(): Char2BooleanAVLTreeMap$Entry;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}