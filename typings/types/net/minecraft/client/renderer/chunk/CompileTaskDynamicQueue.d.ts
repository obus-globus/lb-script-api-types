import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class CompileTaskDynamicQueue extends Object {
    constructor()
    // private recompileQuota: number;
    // private tasks: SectionRenderDispatcher$RenderSection$CompileTask[];
    add(task: SectionRenderDispatcher$RenderSection$CompileTask): void;
    clear(): void;
    poll(cameraPos: Vec3): SectionRenderDispatcher$RenderSection$CompileTask;
    // private removeTaskByIndex(taskIndex: number): SectionRenderDispatcher$RenderSection$CompileTask;
    size(): number;
}