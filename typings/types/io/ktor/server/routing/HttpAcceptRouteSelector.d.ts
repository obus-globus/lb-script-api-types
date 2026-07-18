import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HttpMultiAcceptRouteSelector } from '../../../../io/ktor/server/routing/HttpMultiAcceptRouteSelector.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class HttpAcceptRouteSelector extends RouteSelector {
    constructor(contentType: ContentType)
    readonly contentType: ContentType;
    // private delegate: HttpMultiAcceptRouteSelector;
    component1(): ContentType;
    copy(contentType: ContentType): HttpAcceptRouteSelector;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    hashCode(): number;
    toString(): string;
}