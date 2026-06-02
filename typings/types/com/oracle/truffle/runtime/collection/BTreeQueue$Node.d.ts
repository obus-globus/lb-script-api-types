import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BTreeQueue$Node<E extends Object | number | string | boolean> extends Object {
    constructor(pivot: Object)
    // private children: Object[];
    // private count: number;
    // private pivot: Object;
    isLeaf(): boolean;
}