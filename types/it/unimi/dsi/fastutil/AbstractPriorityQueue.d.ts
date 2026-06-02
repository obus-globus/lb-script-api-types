import type { PriorityQueue } from '../../../../it/unimi/dsi/fastutil/PriorityQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractPriorityQueue<K extends Object | number | string | boolean> extends Object implements PriorityQueue<K> {
    constructor()
    changed(): void;
    isEmpty(): boolean;
    last(): K;
}