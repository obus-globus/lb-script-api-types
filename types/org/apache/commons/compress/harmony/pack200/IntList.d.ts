import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntList extends Object {
    constructor()
    constructor(arg0: number)
    // private array: number[];
    // private firstIndex: number;
    // private lastIndex: number;
    // private modCount: number;
    add(arg0: number): boolean;
    add(arg0: number, arg1: number): void;
    addAll(arg0: IntList): void;
    clear(): void;
    get(arg0: number): number;
    // private growAtEnd(arg0: number): void;
    // private growAtFront(arg0: number): void;
    // private growForInsert(arg0: number, arg1: number): void;
    increment(arg0: number): void;
    isEmpty(): boolean;
    remove(arg0: number): number;
    size(): number;
    toArray(): number[];
}