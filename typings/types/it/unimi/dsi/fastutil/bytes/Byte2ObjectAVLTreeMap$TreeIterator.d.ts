import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Byte2ObjectAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/bytes/Byte2ObjectAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Byte2ObjectAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: number)
    // private curr: Byte2ObjectAVLTreeMap$Entry<V>;
    // private index: number;
    // private next: Byte2ObjectAVLTreeMap$Entry<V>;
    // private prev: Byte2ObjectAVLTreeMap$Entry<V>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<V extends unknown>(): Byte2ObjectAVLTreeMap$Entry<V>;
    nextIndex(): number;
    previousEntry<V extends unknown>(): Byte2ObjectAVLTreeMap$Entry<V>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}