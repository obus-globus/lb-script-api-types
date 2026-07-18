import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingPipelineCall } from '../../../../io/ktor/server/routing/RoutingPipelineCall.d.ts'
import type { RoutingRequest } from '../../../../io/ktor/server/routing/RoutingRequest.d.ts'
import type { RoutingResponse } from '../../../../io/ktor/server/routing/RoutingResponse.d.ts'
import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class RoutingCall extends Object implements ApplicationCall {
    constructor(pipelineCall: RoutingPipelineCall)
    readonly application: Application;
    readonly attributes: Attributes;
    readonly coroutineContext: CoroutineContext;
    readonly parameters: Parameters;
    readonly pathParameters: Parameters;
    readonly pipelineCall: RoutingPipelineCall;
    readonly queryParameters: Parameters;
    readonly request: RoutingRequest;
    readonly response: RoutingResponse;
    readonly route: RoutingNode;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveNullable<T extends unknown>(typeInfo: TypeInfo, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    respond(message: Object | null, typeInfo: TypeInfo | null, $completion: Continuation<void>): any;
}