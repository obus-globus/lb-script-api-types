import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { ApplicationReceivePipeline } from '../../../../io/ktor/server/request/ApplicationReceivePipeline.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingPipelineRequest } from '../../../../io/ktor/server/routing/RoutingPipelineRequest.d.ts'
import type { RoutingPipelineResponse } from '../../../../io/ktor/server/routing/RoutingPipelineResponse.d.ts'
import type { Attributes } from '../../../../io/ktor/util/Attributes.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class RoutingPipelineCall extends Object implements PipelineCall, CoroutineScope {
    constructor(engineCall: PipelineCall, route: RoutingNode, receivePipeline: ApplicationReceivePipeline, responsePipeline: ApplicationSendPipeline, pathParameters: Parameters)
    constructor(engineCall: PipelineCall, route: RoutingNode, coroutineContext: CoroutineContext, receivePipeline: ApplicationReceivePipeline, responsePipeline: ApplicationSendPipeline, pathParameters: Parameters)
    readonly application: Application;
    readonly attributes: Attributes;
    readonly coroutineContext: CoroutineContext;
    readonly engineCall: PipelineCall;
    readonly parameters: Parameters;
    readonly pathParameters: Parameters;
    readonly request: RoutingPipelineRequest;
    readonly response: RoutingPipelineResponse;
    readonly route: RoutingNode;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    receiveNullable<T extends unknown>(typeInfo: TypeInfo, $completion: Continuation<T>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    respond(message: Object | null, typeInfo: TypeInfo | null, $completion: Continuation<void>): any;
    toString(): string;
}