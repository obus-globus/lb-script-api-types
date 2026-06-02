import type { AbstractTraversableMultiForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/AbstractTraversableMultiForest.d.ts'
import type { TraversableTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableTree.d.ts'
export class TraversableMultiForest extends AbstractTraversableMultiForest<TraversableTree> {
    static forestDimFromBuildDistance(paramarg0: number): number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    makeTree(arg0: number, arg1: number, arg2: number): TraversableTree;
    makeTrees(arg0: number): TraversableTree[];
}