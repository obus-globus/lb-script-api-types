import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { TaskQueueType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/TaskQueueType.d.ts'
import type { ChunkRenderList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/ChunkRenderList.d.ts'
import type { RenderListProvider } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/RenderListProvider.d.ts'
import type { RenderSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/RenderSectionVisitor.d.ts'
import type { SortedRenderLists } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SortedRenderLists.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
export abstract class SectionCollector extends Object implements RenderListProvider, RenderSectionVisitor {
    constructor(arg0: number, arg1: TaskQueueType, arg2: TaskQueueType)
    // private frame: number;
    // private importantRebuildQueueType: TaskQueueType;
    // private importantSortQueueType: TaskQueueType;
    // private needsRevisitForPendingUpdates: boolean;
    // private renderLists: ChunkRenderList[];
    // private sortedTaskLists: { [key in TaskQueueType]: RenderSection[] };
    createRenderLists(arg0: Viewport): SortedRenderLists;
    getCachedSortItems(): number[];
    getTaskLists(): { [key in TaskQueueType]: RenderSection[] };
    getUnsortedRenderLists(): ChunkRenderList[];
    needsRevisitForPendingUpdates(): boolean;
    setCachedSortItems(arg0: number[]): void;
    visit(arg0: RenderSection): void;
    // private visit(arg0: RenderSection, arg1: number): void;
    visitWithFlags(arg0: RenderSection, arg1: number): void;
}