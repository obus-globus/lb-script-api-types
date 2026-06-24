import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { RenderSectionRegion } from '../../../../../net/minecraft/client/renderer/chunk/RenderSectionRegion.d.ts'
import type { SectionRenderDispatcher$RenderSection } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection.d.ts'
import type { SectionRenderDispatcher$RenderSection$SectionTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$SectionTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult.d.ts'
export class SectionRenderDispatcher$RenderSection$CompileTask extends SectionRenderDispatcher$RenderSection$SectionTask {
    constructor(null_: SectionRenderDispatcher$RenderSection, region: RenderSectionRegion, isRecompile: boolean)
    // private region: RenderSectionRegion;
    cancel(): void;
    doTask(buffers: SectionBufferBuilderPack): SectionRenderDispatcher$RenderSection$SectionTask$SectionTaskResult;
}