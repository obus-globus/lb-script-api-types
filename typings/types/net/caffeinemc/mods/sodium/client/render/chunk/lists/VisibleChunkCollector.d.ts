import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ChunkRenderList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderList.d.ts'
import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { RenderListProvider } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/RenderListProvider.d.ts'
import type { SortedRenderLists } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortedRenderLists.d.ts'
import type { RenderRegionManager } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/region/RenderRegionManager.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export class VisibleChunkCollector extends Object implements CoordinateSectionVisitor, RenderListProvider {
    constructor(arg0: RenderRegionManager, arg1: number)
    // private frame: number;
    // private regions: RenderRegionManager;
    // private sortedRenderLists: ChunkRenderList[];
    createRenderLists(arg0: Viewport): SortedRenderLists;
    getCachedSortItems(): number[];
    getUnsortedRenderLists(): ChunkRenderList[];
    setCachedSortItems(arg0: number[]): void;
    visit(arg0: number, arg1: number, arg2: number): void;
}