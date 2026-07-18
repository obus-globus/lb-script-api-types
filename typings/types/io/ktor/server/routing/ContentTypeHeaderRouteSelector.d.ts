import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RouteSelectorEvaluation$Failure } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation$Failure.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class ContentTypeHeaderRouteSelector extends RouteSelector {
    constructor(contentTypes: ContentType[])
    readonly contentTypes: ContentType[];
    // private failedEvaluation: RouteSelectorEvaluation$Failure;
    component1(): ContentType[];
    copy(contentTypes: ContentType[]): ContentTypeHeaderRouteSelector;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    hashCode(): number;
    toString(): string;
}