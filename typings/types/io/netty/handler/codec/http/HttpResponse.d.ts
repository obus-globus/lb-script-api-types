import type { DecoderResult } from '../../../../../io/netty/handler/codec/DecoderResult.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface HttpResponse extends HttpMessage, Object{
    decoderResult(): DecoderResult;
    getDecoderResult(): DecoderResult;
    getProtocolVersion(): HttpVersion;
    getStatus(): HttpResponseStatus;
    protocolVersion(): HttpVersion;
    setDecoderResult(arg0: DecoderResult): void;
    setProtocolVersion(arg0: HttpVersion): HttpResponse;
    setStatus(arg0: HttpResponseStatus): HttpResponse;
    status(): HttpResponseStatus;
}