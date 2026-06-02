import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DisjointSet extends Object {
    constructor(size: number)
    // private parent: number[];
    // private rank: number[];
    find(node: number): number;
    union(left: number, right: number): void;
}