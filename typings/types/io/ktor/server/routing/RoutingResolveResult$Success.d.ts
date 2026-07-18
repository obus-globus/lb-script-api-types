import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { RoutingResolveResult } from '../../../../io/ktor/server/routing/RoutingResolveResult.d.ts'
export class RoutingResolveResult$Success extends RoutingResolveResult {
    constructor(route: RoutingNode, parameters: Parameters)
    constructor(route: RoutingNode, parameters: Parameters, quality: number)
    readonly parameters: Parameters;
    // private quality: number;
    /*not mapped: */ getQuality$ktor_server_core(): number;
    toString(): string;
}