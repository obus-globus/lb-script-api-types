import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class QueueEntry<T extends unknown> extends Record {
    constructor(node: T, gScore: number, fScore: number)
    // private fScore: number;
    /*not mapped: */ fScore(): number;
    // private gScore: number;
    /*not mapped: */ gScore(): number;
    // private node: T;
    /*not mapped: */ node(): T;
    component1(): T;
    component2(): number;
    component3(): number;
    copy(node: T, gScore: number, fScore: number): QueueEntry<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}