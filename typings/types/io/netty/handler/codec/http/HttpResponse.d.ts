import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpResponse extends HttpMessage, Object{
    getStatus(): HttpResponseStatus;
    setProtocolVersion(arg0: HttpVersion): HttpResponse;
    setStatus(arg0: HttpResponseStatus): HttpResponse;
    status(): HttpResponseStatus;
}