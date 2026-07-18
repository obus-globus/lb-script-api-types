import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { PipelineRequest } from '../../../../io/ktor/server/request/PipelineRequest.d.ts'
import type { PipelineResponse } from '../../../../io/ktor/server/response/PipelineResponse.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface PipelineCall extends ApplicationCall, Object{
    readonly request: PipelineRequest;
    readonly response: PipelineResponse;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveNullable<T extends unknown>(typeInfo: TypeInfo, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    respond(message: Object | null, typeInfo: TypeInfo | null, $completion: Continuation<void>): any;
}