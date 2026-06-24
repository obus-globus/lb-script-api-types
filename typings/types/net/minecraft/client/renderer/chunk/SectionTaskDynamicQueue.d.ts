import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SectionRenderDispatcher$RenderSection$SectionTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$SectionTask.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SectionTaskDynamicQueue extends Object {
    constructor()
    // private recompileQuota: number;
    // private tasks: SectionRenderDispatcher$RenderSection$SectionTask[];
    add(task: SectionRenderDispatcher$RenderSection$SectionTask): void;
    clear(): void;
    poll(cameraPos: Vec3): SectionRenderDispatcher$RenderSection$SectionTask;
    // private removeTaskByIndex(taskIndex: number): SectionRenderDispatcher$RenderSection$SectionTask;
    size(): number;
}