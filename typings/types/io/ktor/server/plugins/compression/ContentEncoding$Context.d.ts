import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PipelineContext } from '../../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ContentEncoding$Context extends Object {
    constructor(pipelineContext: PipelineContext<Object, PipelineCall>)
    // private pipelineContext: PipelineContext<Object, PipelineCall>;
    transformBody(block: (param0: OutgoingContent) => OutgoingContent | null): void;
}