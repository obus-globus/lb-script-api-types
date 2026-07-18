import type { HostRouteSelector$Companion } from '../../../../io/ktor/server/routing/HostRouteSelector$Companion.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export class HostRouteSelector extends RouteSelector {
    static Companion: HostRouteSelector$Companion;
    static HostNameParameter: string;
    static PortParameter: string;
    constructor(hostList: string[], hostPatterns: Regex[], portsList: number[])
    readonly hostList: string[];
    readonly hostPatterns: Regex[];
    readonly portsList: number[];
    component1(): string[];
    component2(): Regex[];
    component3(): number[];
    copy(hostList: string[], hostPatterns: Regex[], portsList: number[]): HostRouteSelector;
    equals(other: Object | null): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    hashCode(): number;
    toString(): string;
}