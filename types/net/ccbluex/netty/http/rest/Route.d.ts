import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { Function2 } from '../../../../../kotlin/jvm/functions/Function2.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class Route extends Node {
    constructor(name: string, method: HttpMethod, handler: Function2<Object, Object, Object>)
}