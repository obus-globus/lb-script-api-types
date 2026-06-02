import type { BaseForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/BaseForest.d.ts'
import type { Tree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Tree.d.ts'
export abstract class BaseMultiForest<T extends Tree> extends BaseForest<T> {
    static forestDimFromBuildDistance(paramarg0: number): number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private forestDim: number;
    // private lastTree: T;
    // private trees: T[];
    add(arg0: number, arg1: number, arg2: number): void;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    getTreeIndex(arg0: number, arg1: number, arg2: number): number;
    makeTrees(arg0: number): T[];
}