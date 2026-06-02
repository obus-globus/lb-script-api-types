import type { PriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/PriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractPriorityQueue<K extends Object | number | string | boolean> extends Object implements PriorityQueue<K> {
    constructor()
    changed(): void;
    isEmpty(): boolean;
    last(): K;
}