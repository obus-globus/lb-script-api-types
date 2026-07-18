import type { HttpMethod } from '../../../../io/ktor/http/HttpMethod.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class HttpMethodRouteSelector extends RouteSelector {
    constructor(method: HttpMethod)
    readonly method: HttpMethod;
    component1(): HttpMethod;
    copy(method: HttpMethod): HttpMethodRouteSelector;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    hashCode(): number;
    toString(): string;
}