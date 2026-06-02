import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FullHttpRequest extends FullHttpMessage, HttpRequest, Object{
    copy(): FullHttpRequest;
    duplicate(): FullHttpRequest;
    replace(arg0: ByteBuf): FullHttpRequest;
    retain(): FullHttpRequest;
    retain(arg0: number): FullHttpRequest;
    retainedDuplicate(): FullHttpRequest;
    setMethod(arg0: HttpMethod): FullHttpRequest;
    setProtocolVersion(arg0: HttpVersion): FullHttpRequest;
    setUri(arg0: string): FullHttpRequest;
    touch(): FullHttpRequest;
    touch(arg0: Object): FullHttpRequest;
}