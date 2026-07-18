import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PipelineContext } from '../../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ResponseBodyReadyForSend$Context extends Object {
    constructor(context: PipelineContext<Object, PipelineCall>)
    // private context: PipelineContext<Object, PipelineCall>;
    transformBodyTo(body: OutgoingContent): void;
}