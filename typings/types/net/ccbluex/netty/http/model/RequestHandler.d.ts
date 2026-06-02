import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RequestObject } from '../../../../../net/ccbluex/netty/http/model/RequestObject.d.ts'
export interface RequestHandler extends Object{
    handle(request: RequestObject): FullHttpResponse;
}