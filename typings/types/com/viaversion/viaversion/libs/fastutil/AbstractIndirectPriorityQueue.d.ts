import type { IndirectPriorityQueue } from '../../../../../com/viaversion/viaversion/libs/fastutil/IndirectPriorityQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractIndirectPriorityQueue<K extends unknown> extends Object implements IndirectPriorityQueue<K> {
    constructor()
    allChanged(): void;
    changed(): void;
    changed(arg0: number): void;
    contains(arg0: number): boolean;
    front(arg0: number[]): number;
    isEmpty(): boolean;
    last(): number;
    remove(arg0: number): boolean;
}