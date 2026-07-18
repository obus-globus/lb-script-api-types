import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { RouteSelectorEvaluation$Failure } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation$Failure.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingResolveResult } from '../../../../io/ktor/server/routing/RoutingResolveResult.d.ts'
import type { RoutingResolveResult$Success } from '../../../../io/ktor/server/routing/RoutingResolveResult$Success.d.ts'
import type { RoutingResolveTrace } from '../../../../io/ktor/server/routing/RoutingResolveTrace.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class RoutingResolveContext extends Object {
    constructor(routing: RoutingNode, call: PipelineCall, tracers: (param0: RoutingResolveTrace) => void[])
    readonly call: PipelineCall;
    // private failedEvaluation: RouteSelectorEvaluation$Failure | null;
    // private failedEvaluationDepth: number;
    readonly hasTrailingSlash: boolean;
    // private resolveResult: RoutingResolveResult$Success[];
    readonly routing: RoutingNode;
    readonly segments: string[];
    // private trace: RoutingResolveTrace | null;
    // private tracers: (param0: RoutingResolveTrace) => void[];
    // private findBestRoute(): RoutingResolveResult;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private handleRoute(entry: RoutingNode, segmentIndex: number, trait: RoutingResolveResult$Success[], matchedQuality: number, $completion: Continuation<number>): any;
    // private isBetterResolve(new_: RoutingResolveResult$Success[]): boolean;
    // private parse(path: string): string[];
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    resolve($completion: Continuation<RoutingResolveResult>): any;
    // private updateFailedEvaluation(new_: RouteSelectorEvaluation$Failure, trait: RoutingResolveResult$Success[]): void;
}