import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { Forest } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Forest.d.ts'
import type { Tree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/tree/Tree.d.ts'
export abstract class BaseForest<T extends Tree> extends Object implements Forest {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private baseOffsetX: number;
    // private baseOffsetY: number;
    // private baseOffsetZ: number;
    // private buildDistance: number;
    add(arg0: RenderSection): void;
    isSectionPresent(arg0: number, arg1: number, arg2: number): boolean;
    makeTree(arg0: number, arg1: number, arg2: number): T;
}