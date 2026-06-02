import type { SerialQueue } from '../../../../../com/oracle/truffle/runtime/collection/SerialQueue.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayQueue<E extends Object | number | string | boolean> extends Object implements SerialQueue<E> {
    constructor()
    // private items: Object[];
    // private start: number;
    // private tail: number;
    add(x: E): void;
    addIndexOf(x: E): number;
    clear(): void;
    // private ensureIndex(n: number): void;
    indexOf(x: E): number;
    internalCapacity(): number;
    peek(): E;
    poll(): E;
    size(): number;
    toArray(): Object[];
    toArray(a: T[]): T[];
}