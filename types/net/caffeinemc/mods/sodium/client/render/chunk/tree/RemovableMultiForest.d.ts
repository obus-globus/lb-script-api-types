import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { RemovableForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/RemovableForest.d.ts'
import type { RemovableTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/RemovableTree.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export class RemovableMultiForest extends Object implements RemovableForest {
    constructor(arg0: number)
    // private lastTree: RemovableTree;
    // private treeSortList: RemovableTree[];
    // private trees: Long2ReferenceLinkedOpenHashMap<RemovableTree>;
    // private treesAreReady: boolean;
    add(arg0: number, arg1: number, arg2: number): void;
    ensureCapacity(arg0: number): void;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    prepareForTraversal(): void;
    remove(arg0: number, arg1: number, arg2: number): void;
    remove(arg0: RenderSection): void;
    traverse(arg0: CoordinateSectionVisitor, arg1: Viewport, arg2: number): void;
}