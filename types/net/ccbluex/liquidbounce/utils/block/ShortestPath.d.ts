import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ShortestPath<T extends Object | number | string | boolean> extends Record {
    constructor(nodes: T[], totalCost: number)
    // private nodes: T[];
    /*not mapped: */ nodes(): T[];
    // private totalCost: number;
    /*not mapped: */ totalCost(): number;
    component1(): T[];
    component2(): number;
    copy(nodes: T[], totalCost: number): ShortestPath<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}