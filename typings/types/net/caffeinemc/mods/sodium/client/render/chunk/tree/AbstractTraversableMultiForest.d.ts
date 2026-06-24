import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { BaseMultiForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/BaseMultiForest.d.ts'
import type { TraversableForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableForest.d.ts'
import type { TraversableTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableTree.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export abstract class AbstractTraversableMultiForest<T extends TraversableTree> extends BaseMultiForest<T> implements TraversableForest<T> {
    static createTraversableForest(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: Level): TraversableForest<TraversableTree>;
    static forestDimFromBuildDistance(paramarg0: number): number;
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    addPatch(arg0: number, arg1: number, arg2: number): boolean;
    prepareForTraversal(): void;
    traverse(arg0: CoordinateSectionVisitor, arg1: Viewport, arg2: number): void;
}