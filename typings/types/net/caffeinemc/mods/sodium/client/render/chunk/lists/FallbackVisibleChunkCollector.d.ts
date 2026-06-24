import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { SortedRenderLists } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortedRenderLists.d.ts'
import type { TaskCollectingTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/TaskCollectingTree.d.ts'
import type { VisibleChunkCollector } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/VisibleChunkCollector.d.ts'
import type { RenderRegionManager } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegionManager.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class FallbackVisibleChunkCollector extends TaskCollectingTree implements CoordinateSectionVisitor {
    static SECTION_Y_MIN: number;
    constructor(arg0: Viewport, arg1: number, arg2: number, arg3: { [key: string]: any }, arg4: RenderRegionManager, arg5: Level)
    // private renderListCollector: VisibleChunkCollector;
    // private sectionByPosition: { [key: string]: any };
    createRenderLists(arg0: Viewport): SortedRenderLists;
    visit(arg0: number, arg1: number, arg2: number): void;
    visit(arg0: RenderSection, arg1: boolean): void;
}