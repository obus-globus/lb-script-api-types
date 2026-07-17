import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object2BooleanAVLTreeMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanAVLTreeMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanAVLTreeMap$TreeIterator extends Object {
    constructor(null_: JavaMap<any, any>)
    constructor(null_: JavaMap<any, any>, arg1: Object)
    // private curr: Object2BooleanAVLTreeMap$Entry<K>;
    // private index: number;
    // private next: Object2BooleanAVLTreeMap$Entry<K>;
    // private prev: Object2BooleanAVLTreeMap$Entry<K>;
    back(arg0: number): number;
    hasNext(): boolean;
    hasPrevious(): boolean;
    nextEntry<K extends unknown>(): Object2BooleanAVLTreeMap$Entry<K>;
    nextIndex(): number;
    previousEntry<K extends unknown>(): Object2BooleanAVLTreeMap$Entry<K>;
    previousIndex(): number;
    remove(): void;
    skip(arg0: number): number;
    updateNext(): void;
    updatePrevious(): void;
}