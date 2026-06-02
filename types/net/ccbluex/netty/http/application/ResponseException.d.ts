import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class ResponseException extends RuntimeException {
    constructor(response: FullHttpResponse)
    readonly response: FullHttpResponse;
}