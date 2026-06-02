import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LeveledPriorityQueue extends Object {
    constructor(levelCount: number, minSize: number)
    // private firstQueuedLevel: number;
    // private levelCount: number;
    // private queues: (Object | null)[][];
    // private checkFirstQueuedLevel(upperBound: number): void;
    dequeue(node: number, key: number, upperBound: number): void;
    enqueue(node: number, key: number): void;
    isEmpty(): boolean;
    removeFirstLong(): number;
}