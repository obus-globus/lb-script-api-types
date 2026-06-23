import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { TaskQueueType } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/TaskQueueType.d.ts'
import type { CoordinateSectionVisitor } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/CoordinateSectionVisitor.d.ts'
import type { SectionCollector } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/lists/SectionCollector.d.ts'
export class TreeSectionCollector extends SectionCollector implements CoordinateSectionVisitor {
    constructor(arg0: number, arg1: TaskQueueType, arg2: TaskQueueType, arg3: { [key: string]: any })
    // private sections: { [key: string]: any };
    orderIsSorted(): boolean;
    visit(arg0: number, arg1: number, arg2: number): void;
    visit(arg0: RenderSection): void;
}