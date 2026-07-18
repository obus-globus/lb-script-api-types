import type { RouteParameterComponent } from '../../../../io/ktor/server/routing/RouteParameterComponent.d.ts'
import type { RoutePathComponent } from '../../../../io/ktor/server/routing/RoutePathComponent.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class PathSegmentParameterRouteSelector extends RouteSelector implements RouteParameterComponent, RoutePathComponent {
    constructor(name: string, prefix: string | null, suffix: string | null)
    readonly name: string;
    readonly prefix: string | null;
    readonly suffix: string | null;
    component1(): string;
    component2(): string | null;
    component3(): string | null;
    copy(name: string, prefix: string | null, suffix: string | null): PathSegmentParameterRouteSelector;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    hashCode(): number;
    toString(): string;
}