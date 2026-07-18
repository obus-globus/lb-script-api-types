import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { RoutePathFormat } from '../../../../io/ktor/server/routing/RoutePathFormat.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { PipelinePhase } from '../../../../io/ktor/util/pipeline/PipelinePhase.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingNodeKt extends Object {
    static getAllRoutes(self: RoutingNode): RoutingNode[];
    static getPath(paramarg0: Route): string;
    static insertPhaseAfter(self: Route, reference: PipelinePhase, phase: PipelinePhase): void;
    static insertPhaseBefore(self: Route, reference: PipelinePhase, phase: PipelinePhase): void;
    static intercept(self: Route, phase: PipelinePhase, block: (param0: PipelineContext<void, PipelineCall>, param1: void) => void): void;
    static path(self: Route, format: RoutePathFormat): string;
}