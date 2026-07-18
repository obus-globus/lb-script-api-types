import type { ApplicationCallPipeline } from '../../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { Hook } from '../../../../../io/ktor/server/application/Hook.d.ts'
import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ContentEncoding$Context } from '../../../../../io/ktor/server/plugins/compression/ContentEncoding$Context.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContentEncoding extends Object implements Hook<(param0: ContentEncoding$Context, param1: PipelineCall) => void> {
    static INSTANCE: ContentEncoding;
    install(pipeline: ApplicationCallPipeline, handler: (param0: ContentEncoding$Context, param1: PipelineCall) => void): void;
}