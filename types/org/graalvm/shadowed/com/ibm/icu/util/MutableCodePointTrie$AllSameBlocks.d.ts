import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class MutableCodePointTrie$AllSameBlocks extends Object {
    constructor()
    // private indexes: number[];
    // private length: number;
    // private mostRecent: number;
    // private refCounts: number[];
    // private values: number[];
    add(index: number, count: number, value: number): void;
    findMostUsed(): number;
    findOrAdd(index: number, count: number, value: number): number;
}