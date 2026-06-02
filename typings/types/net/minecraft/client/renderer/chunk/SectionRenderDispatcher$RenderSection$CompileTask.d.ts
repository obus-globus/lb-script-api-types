import type { AtomicBoolean } from '../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SectionBufferBuilderPack } from '../../../../../net/minecraft/client/renderer/SectionBufferBuilderPack.d.ts'
import type { SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult } from '../../../../../net/minecraft/client/renderer/chunk/SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
export abstract class SectionRenderDispatcher$RenderSection$CompileTask extends Object {
    constructor(null_: SectionRenderDispatcher$RenderSection$CompileTask, isRecompile: boolean)
    // private isCancelled: AtomicBoolean;
    // private isCompleted: AtomicBoolean;
    // private isRecompile: boolean;
    cancel(): void;
    doTask(buffers: SectionBufferBuilderPack): SectionRenderDispatcher$RenderSection$CompileTask$SectionTaskResult;
    getRenderOrigin(): BlockPos;
    isRecompile(): boolean;
    name(): string;
}