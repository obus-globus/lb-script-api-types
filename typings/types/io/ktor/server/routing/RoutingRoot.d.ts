import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationCallPipeline$ApplicationPhase } from '../../../../io/ktor/server/application/ApplicationCallPipeline$ApplicationPhase.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { Routing } from '../../../../io/ktor/server/routing/Routing.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingResolveTrace } from '../../../../io/ktor/server/routing/RoutingResolveTrace.d.ts'
import type { RoutingRoot$Plugin } from '../../../../io/ktor/server/routing/RoutingRoot$Plugin.d.ts'
import type { Pipeline } from '../../../../io/ktor/util/pipeline/Pipeline.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class RoutingRoot extends RoutingNode implements Routing {
    static ApplicationPhase: ApplicationCallPipeline$ApplicationPhase;
    static Plugin: RoutingRoot$Plugin;
    constructor(application: Application)
    readonly application: Application;
    // private tracers: (param0: RoutingResolveTrace) => void[];
    // private addDefaultTracing(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private executeResult(context: PipelineContext<void, PipelineCall>, route: RoutingNode, parameters: Parameters, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    interceptor(context: PipelineContext<void, PipelineCall>, $completion: Continuation<void>): any;
    // private merge<P extends Pipeline<Subject, Context>>(first: P, second: P, build: () => P): P;
    merge(from: Pipeline<void, PipelineCall>): void;
    trace(block: (param0: RoutingResolveTrace) => void): void;
}