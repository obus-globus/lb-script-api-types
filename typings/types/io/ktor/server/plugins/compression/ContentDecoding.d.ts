import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ContentDecoding$Context } from '../../../../../io/ktor/server/plugins/compression/ContentDecoding$Context.d.ts'
import type { PipelinePhase } from '../../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContentDecoding extends Object implements Hook<(param0: ContentDecoding$Context, param1: PipelineCall) => void> {
    static INSTANCE: ContentDecoding;
    // private contentDecoding: PipelinePhase;
    install(pipeline: ApplicationCallPipeline, handler: (param0: ContentDecoding$Context, param1: PipelineCall) => void): void;
}