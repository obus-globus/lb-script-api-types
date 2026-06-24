import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { CompiledSectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/CompiledSectionMesh.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { SectionRenderDispatcher$RenderSection$SectionTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$SectionTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult.d.ts'
export class SectionRenderDispatcher$RenderSection$ResortTransparencyTask extends SectionRenderDispatcher$RenderSection$SectionTask {
    constructor(null_: SectionRenderDispatcher$RenderSection, compiledSectionMesh: CompiledSectionMesh)
    // private compiledSectionMesh: CompiledSectionMesh;
    cancel(): void;
    doTask(buffers: SectionBufferBuilderPack): SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
}