import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SerialQueue<E extends unknown> extends Object{
    add(x: E): void;
    addIndexOf(x: E): number;
    clear(): void;
    indexOf(x: E): number;
    internalCapacity(): number;
    peek(): E;
    poll(): E;
    size(): number;
    toArray(): Object[];
    toArray<T extends unknown>(a: T[]): T[];
}