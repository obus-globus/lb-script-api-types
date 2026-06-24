import type { TraversableTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableTree.d.ts'
export class RemovableTree extends TraversableTree {
    static NOT_PRESENT: number;
    static OUT_OF_BOUNDS: number;
    static PRESENT: number;
    static isOutOfBounds(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    constructor(arg0: number, arg1: number, arg2: number)
    // private reducedIsValid: boolean;
    readonly sortKey: number;
    add(arg0: number, arg1: number, arg2: number): number;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    getSortKey(): number;
    getTreeKey(): number;
    isEmpty(): boolean;
    prepareForTraversal(): void;
    remove(arg0: number, arg1: number, arg2: number): boolean;
    updateSortKeyFor(arg0: number, arg1: number, arg2: number): void;
}