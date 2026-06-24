import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { BaseForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/BaseForest.d.ts'
import type { Forest$TreeAddMethod } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Forest$TreeAddMethod.d.ts'
import type { Tree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Tree.d.ts'
export abstract class BaseMultiForest<T extends Tree> extends BaseForest<T> {
    static forestDimFromBuildDistance(paramarg0: number): number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private forestDim: number;
    // private lastTree: T;
    // private trees: T[];
    add(arg0: number, arg1: number, arg2: number): void;
    add(arg0: number, arg1: number, arg2: number, arg3: (param0: T, param1: number, param2: number, param3: number) => number): boolean;
    add(arg0: RenderSection): void;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    getTreeIndex(arg0: number, arg1: number, arg2: number): number;
    makeTrees(arg0: number): T[];
}