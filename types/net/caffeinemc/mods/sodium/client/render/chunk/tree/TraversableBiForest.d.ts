import type { AbstractTraversableBiForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/AbstractTraversableBiForest.d.ts'
import type { TraversableTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableTree.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class TraversableBiForest extends AbstractTraversableBiForest<TraversableTree> {
    static checkApplicable(paramarg0: number, paramarg1: Level): boolean;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    makeTree(arg0: number, arg1: number, arg2: number): TraversableTree;
}