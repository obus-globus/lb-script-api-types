import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ChunkRenderList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderList.d.ts'
import type { SortItemsProvider } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortItemsProvider.d.ts'
import type { SortedRenderLists } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortedRenderLists.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export interface RenderListProvider extends Object, SortItemsProvider{
    createRenderLists(arg0: Viewport): SortedRenderLists;
    ensureSortItemsOfLength(arg0: number): number[];
    getUnsortedRenderLists(): ChunkRenderList[];
}