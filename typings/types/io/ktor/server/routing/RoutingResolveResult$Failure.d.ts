import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingResolveResult } from '../../../../io/ktor/server/routing/RoutingResolveResult.d.ts'
export class RoutingResolveResult$Failure extends RoutingResolveResult {
    constructor(route: RoutingNode, reason: string)
    constructor(route: RoutingNode, reason: string, errorStatusCode: HttpStatusCode)
    readonly errorStatusCode: HttpStatusCode;
    readonly parameters: void;
    readonly reason: string;
    toString(): string;
}