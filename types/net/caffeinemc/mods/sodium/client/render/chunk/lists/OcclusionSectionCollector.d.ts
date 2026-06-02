import type { TaskQueueType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/TaskQueueType.d.ts'
import type { SectionCollector } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SectionCollector.d.ts'
export class OcclusionSectionCollector extends SectionCollector {
    constructor(arg0: number, arg1: TaskQueueType, arg2: TaskQueueType)
    orderIsSorted(): boolean;
}