import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { AbstractSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/AbstractSectionVisitor.d.ts'
import type { VisibleChunkCollector } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/VisibleChunkCollector.d.ts'
import type { CullType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/CullType.d.ts'
import type { SectionTree$NotInTreePredicate } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/SectionTree$NotInTreePredicate.d.ts'
import type { TraversableForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableForest.d.ts'
import type { TraversableTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableTree.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class SectionTree extends AbstractSectionVisitor {
    constructor(arg0: Viewport, arg1: number, arg2: number, arg3: CullType, arg4: Level)
    // private bfsWidth: number;
    buildDistance: number;
    readonly frame: number;
    tree: TraversableForest<TraversableTree>;
    getFrame(): number;
    isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: (param0: number, param1: number, param2: number) => boolean): boolean;
    isSectionVisible(arg0: Viewport, arg1: RenderSection): boolean;
    isValidFor(arg0: Viewport, arg1: number): boolean;
    // private isWithinFrustum(arg0: Viewport, arg1: RenderSection): boolean;
    markPresent(arg0: number, arg1: number, arg2: number): void;
    patchMarkPresent(arg0: number, arg1: number, arg2: number): boolean;
    prepareForTraversal(): void;
    traverse(arg0: VisibleChunkCollector, arg1: Viewport, arg2: number): void;
    visit(arg0: RenderSection, arg1: boolean): void;
}