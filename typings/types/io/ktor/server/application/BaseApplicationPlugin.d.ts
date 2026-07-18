import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { Plugin } from '../../../../io/ktor/server/application/Plugin.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BaseApplicationPlugin<TPipeline extends Pipeline<Object, PipelineCall>, TConfiguration extends unknown, TPlugin extends unknown> extends Plugin<TPipeline, TConfiguration, TPlugin>, Object{
}