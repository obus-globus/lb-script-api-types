import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { TraversableForest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/TraversableForest.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export interface RemovableForest extends Object, TraversableForest{
    add(arg0: number, arg1: number, arg2: number): void;
    getPresence(arg0: number, arg1: number, arg2: number): number;
    prepareForTraversal(): void;
    remove(arg0: number, arg1: number, arg2: number): void;
    traverse(arg0: CoordinateSectionVisitor, arg1: Viewport, arg2: number): void;
}