import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Plugin<TPipeline extends Pipeline<Object, PipelineCall>, TConfiguration extends unknown, TPlugin extends unknown> extends Object {
    readonly key: AttributeKey<TPlugin>;
    install(pipeline: TPipeline, configure: (param0: TConfiguration) => void): TPlugin;
}