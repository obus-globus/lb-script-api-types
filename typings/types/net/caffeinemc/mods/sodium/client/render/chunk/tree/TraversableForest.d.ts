import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { Forest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Forest.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export interface TraversableForest extends Object, Forest{
    add(arg0: number, arg1: number, arg2: number): void;
    add(arg0: RenderSection): void;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    isSectionPresent(arg0: number, arg1: number, arg2: number): boolean;
    prepareForTraversal(): void;
    traverse(arg0: CoordinateSectionVisitor, arg1: Viewport, arg2: number): void;
}