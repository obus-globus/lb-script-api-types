import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingResolveResult } from '../../../../io/ktor/server/routing/RoutingResolveResult.d.ts'
import type { RoutingResolveResult$Success } from '../../../../io/ktor/server/routing/RoutingResolveResult$Success.d.ts'
import type { RoutingResolveTraceEntry } from '../../../../io/ktor/server/routing/RoutingResolveTraceEntry.d.ts'
import type { Stack } from '../../../../io/ktor/server/routing/Stack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingResolveTrace extends Object {
    constructor(call: PipelineCall, segments: string[])
    readonly call: PipelineCall;
    // private finalResult: RoutingResolveResult;
    // private resolveCandidates: RoutingResolveResult$Success[][];
    // private routing: RoutingResolveTraceEntry | null;
    readonly segments: string[];
    // private stack: Stack<RoutingResolveTraceEntry>;
    addCandidate(trait: RoutingResolveResult$Success[]): void;
    begin(route: RoutingNode, segmentIndex: number): void;
    buildText(): string;
    finish(route: RoutingNode, segmentIndex: number, result: RoutingResolveResult): void;
    // private register(entry: RoutingResolveTraceEntry): void;
    registerFinalResult(result: RoutingResolveResult): void;
    skip(route: RoutingNode, segmentIndex: number, result: RoutingResolveResult): void;
    toString(): string;
}