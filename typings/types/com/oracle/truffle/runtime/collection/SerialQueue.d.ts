import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SerialQueue<E extends Object | number | string | boolean> extends Object{
    add(x: E): void;
    addIndexOf(x: E): number;
    clear(): void;
    indexOf(x: E): number;
    internalCapacity(): number;
    peek(): E;
    poll(): E;
    size(): number;
    toArray(): Object[];
    toArray<T extends Object | number | string | boolean>(a: T[]): T[];
}