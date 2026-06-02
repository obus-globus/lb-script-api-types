import type { Object } from '../java/lang/Object.d.ts'
import type { AsyncTimeout } from '../okio/AsyncTimeout.d.ts'
export class PriorityQueue extends Object {
    constructor()
    array: (AsyncTimeout | null)[];
    size: number;
    add(node: AsyncTimeout): void;
    first(): AsyncTimeout | null;
    // private heapifyDown(vacantIndex: number, node: AsyncTimeout): void;
    // private heapifyUp(vacantIndex: number, node: AsyncTimeout): void;
    remove(node: AsyncTimeout): void;
}