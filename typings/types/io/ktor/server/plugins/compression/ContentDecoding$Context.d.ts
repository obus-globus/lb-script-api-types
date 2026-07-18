import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PipelineContext } from '../../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { ByteReadChannel } from '../../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
export class ContentDecoding$Context extends Object {
    constructor(pipelineContext: PipelineContext<Object, PipelineCall>)
    // private pipelineContext: PipelineContext<Object, PipelineCall>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    transformBody(block: (param0: ByteReadChannel) => ByteReadChannel | null, $completion: Continuation<void>): any;
}