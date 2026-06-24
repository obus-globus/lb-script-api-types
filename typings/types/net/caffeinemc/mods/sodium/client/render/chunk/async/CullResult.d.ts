import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DeferredTaskList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/DeferredTaskList.d.ts'
import type { SectionTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/SectionTree.d.ts'
export interface CullResult extends Object{
    getCullTreeLocal(): SectionTree;
    getCullTreeRegular(): SectionTree;
    getCullTreeWide(): SectionTree;
    getPendingTaskLists(): DeferredTaskList;
}