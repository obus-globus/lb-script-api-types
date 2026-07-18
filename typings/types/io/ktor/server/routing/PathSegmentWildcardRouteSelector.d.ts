import type { RoutePathComponent } from '../../../../io/ktor/server/routing/RoutePathComponent.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class PathSegmentWildcardRouteSelector extends RouteSelector implements RoutePathComponent {
    static INSTANCE: PathSegmentWildcardRouteSelector;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    toString(): string;
}