import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { RenderSectionRegion } from '../../../../../net/minecraft/client/renderer/chunk/RenderSectionRegion.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult.d.ts'
export class SectionRenderDispatcher$RenderSection$RebuildTask extends SectionRenderDispatcher$RenderSection$CompileTask {
    constructor(null_: SectionRenderDispatcher$RenderSection$RebuildTask, region: RenderSectionRegion, isRecompile: boolean)
    // private blockStateIds: { [key: string]: any };
    // private region: RenderSectionRegion;
    cancel(): void;
    doTask(buffers: SectionBufferBuilderPack): SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult;
    // private getBlockStateIds(): { [key: string]: any };
    name(): string;
}