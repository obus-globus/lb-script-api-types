import type { LocalPortRouteSelector$Companion } from '../../../../io/ktor/server/routing/LocalPortRouteSelector$Companion.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class LocalPortRouteSelector extends RouteSelector {
    static Companion: LocalPortRouteSelector$Companion;
    static LocalPortParameter: string;
    constructor(port: number)
    readonly port: number;
    component1(): number;
    copy(port: number): LocalPortRouteSelector;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    hashCode(): number;
    toString(): string;
}