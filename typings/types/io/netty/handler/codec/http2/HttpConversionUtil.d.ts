import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { FullHttpRequest } from '../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class HttpConversionUtil extends Object {
    static OUT_OF_MESSAGE_SEQUENCE_METHOD: HttpMethod;
    static OUT_OF_MESSAGE_SEQUENCE_PATH: string;
    static OUT_OF_MESSAGE_SEQUENCE_RETURN_CODE: HttpResponseStatus;
    static addHttp2ToHttpHeaders(paramarg0: number, paramarg1: (Object | null)[], paramarg2: FullHttpMessage, paramarg3: boolean): void;
    static addHttp2ToHttpHeaders(paramarg0: number, paramarg1: (Object | null)[], paramarg2: Map$Entry<string, string>[], paramarg3: HttpVersion, paramarg4: boolean, paramarg5: boolean): void;
    static parseStatus(paramarg0: CharSequence): HttpResponseStatus;
    static toFullHttpRequest(paramarg0: number, paramarg1: (Object | null)[], paramarg2: ByteBuf, paramarg3: boolean): FullHttpRequest;
    static toFullHttpRequest(paramarg0: number, paramarg1: (Object | null)[], paramarg2: ByteBufAllocator, paramarg3: boolean): FullHttpRequest;
    static toFullHttpResponse(paramarg0: number, paramarg1: (Object | null)[], paramarg2: ByteBuf, paramarg3: boolean): FullHttpResponse;
    static toFullHttpResponse(paramarg0: number, paramarg1: (Object | null)[], paramarg2: ByteBufAllocator, paramarg3: boolean): FullHttpResponse;
    static toHttp2Headers(paramarg0: Map$Entry<string, string>[], paramarg1: boolean): (Object | null)[];
    static toHttp2Headers(paramarg0: HttpMessage, paramarg1: boolean): (Object | null)[];
    static toHttp2Headers(paramarg0: Map$Entry<string, string>[], paramarg1: (Object | null)[]): void;
    static toHttpRequest(paramarg0: number, paramarg1: (Object | null)[], paramarg2: boolean): HttpRequest;
    static toHttpResponse(paramarg0: number, paramarg1: (Object | null)[], paramarg2: boolean): HttpResponse;
    private constructor()
}