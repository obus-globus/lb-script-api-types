import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { RoutingNode } from '../../../../io/ktor/server/routing/RoutingNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingResolveResult extends Object {
    protected constructor(route: RoutingNode)
    readonly parameters: Parameters;
    readonly route: RoutingNode;
}