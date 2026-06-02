import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FullHttpResponse extends FullHttpMessage, HttpResponse, Object{
    copy(): FullHttpResponse;
    duplicate(): FullHttpResponse;
    replace(arg0: ByteBuf): FullHttpResponse;
    retain(): FullHttpResponse;
    retain(arg0: number): FullHttpResponse;
    retainedDuplicate(): FullHttpResponse;
    setProtocolVersion(arg0: HttpVersion): FullHttpResponse;
    setStatus(arg0: HttpResponseStatus): FullHttpResponse;
    touch(): FullHttpResponse;
    touch(arg0: Object): FullHttpResponse;
}