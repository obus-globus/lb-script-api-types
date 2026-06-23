import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WeightedEdge<T extends unknown> extends Record {
    constructor(node: T, cost: number)
    // private cost: number;
    /*not mapped: */ cost(): number;
    // private node: T;
    /*not mapped: */ node(): T;
    component1(): T;
    component2(): number;
    copy(node: T, cost: number): WeightedEdge<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}