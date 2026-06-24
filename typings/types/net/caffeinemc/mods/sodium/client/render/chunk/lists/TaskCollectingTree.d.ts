import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { DeferredTaskList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/DeferredTaskList.d.ts'
import type { CullType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/CullType.d.ts'
import type { SectionTree } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/occlusion/SectionTree.d.ts'
import type { Viewport } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/Viewport.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class TaskCollectingTree extends SectionTree {
    static SECTION_Y_MIN: number;
    constructor(arg0: Viewport, arg1: number, arg2: number, arg3: CullType, arg4: Level)
    // private creationTime: number;
    // private invMaxDistance: number;
    // private pendingTasks: (Object | null)[];
    addPendingSection(arg0: RenderSection, arg1: number, arg2: boolean): void;
    getPendingTaskLists(): DeferredTaskList;
    // private getSectionPriority(arg0: RenderSection, arg1: number, arg2: boolean): number;
    visit(arg0: RenderSection, arg1: boolean): void;
}