import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { CompiledSectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/CompiledSectionMesh.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult.d.ts'
export class SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends SectionRenderDispatcher$RenderSection$CompileTask {
    constructor(null_: SectionRenderDispatcher$RenderSection$ResortTransparencyTask, compiledSectionMesh: CompiledSectionMesh)
    // private compiledSectionMesh: CompiledSectionMesh;
    cancel(): void;
    doTask(buffers: SectionBufferBuilderPack): SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult;
    name(): string;
}