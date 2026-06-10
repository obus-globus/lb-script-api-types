import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntegerList extends Object {
    constructor()
    constructor(arg0: number)
    constructor(arg0: number[])
    constructor(arg0: IntegerList)
    // private _data: number[];
    // private _size: number;
    add(arg0: number): void;
    addAll(arg0: number[]): void;
    addAll(arg0: IntegerList): void;
    binarySearch(arg0: number): number;
    binarySearch(arg0: number, arg1: number, arg2: number): number;
    // private charArraySize(): number;
    clear(): void;
    contains(arg0: number): boolean;
    // private ensureCapacity(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    hashCode(): number;
    isEmpty(): boolean;
    removeAt(arg0: number): number;
    removeRange(arg0: number, arg1: number): void;
    set(arg0: number, arg1: number): number;
    size(): number;
    sort(): void;
    toArray(): number[];
    toCharArray(): string[];
    toString(): string;
    trimToSize(): void;
}