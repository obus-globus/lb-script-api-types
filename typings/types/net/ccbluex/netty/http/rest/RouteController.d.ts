import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
import type { RouteController$Destination } from '../../../../../net/ccbluex/netty/http/rest/RouteController$Destination.d.ts'
export class RouteController extends Node {
    constructor()
    processPath(path: string, method: HttpMethod): RouteController$Destination | null;
    // private travelNode(currentNode: Node, pathArray: string[], method: HttpMethod, index: number, params: JavaMap<string, string>): RouteController$Destination | null;
}