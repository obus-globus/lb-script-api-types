import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
import type { RoutingContext } from '../../../../../net/ccbluex/netty/http/routing/RoutingContext.d.ts'
export class Route extends Node {
    constructor(name: string, method: HttpMethod, handler: (param0: RoutingContext) => void)
}