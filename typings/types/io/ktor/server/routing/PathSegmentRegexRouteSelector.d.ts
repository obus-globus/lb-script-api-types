import type { PathSegmentRegexRouteSelector$Companion } from '../../../../io/ktor/server/routing/PathSegmentRegexRouteSelector$Companion.d.ts'
import type { RoutePathComponent } from '../../../../io/ktor/server/routing/RoutePathComponent.d.ts'
import type { RouteSelector } from '../../../../io/ktor/server/routing/RouteSelector.d.ts'
import type { RouteSelectorEvaluation } from '../../../../io/ktor/server/routing/RouteSelectorEvaluation.d.ts'
import type { RoutingResolveContext } from '../../../../io/ktor/server/routing/RoutingResolveContext.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { MatchResult } from '../../../../kotlin/text/MatchResult.d.ts'
import type { Regex } from '../../../../kotlin/text/Regex.d.ts'
export class PathSegmentRegexRouteSelector extends RouteSelector implements RoutePathComponent {
    static Companion: PathSegmentRegexRouteSelector$Companion;
    constructor(regex: Regex)
    readonly regex: Regex;
    // private countSegments(result: MatchResult, lastSlashPosition: number, prefix: string): number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    evaluate(context: RoutingResolveContext, segmentIndex: number, $completion: Continuation<RouteSelectorEvaluation>): any;
    toString(): string;
}