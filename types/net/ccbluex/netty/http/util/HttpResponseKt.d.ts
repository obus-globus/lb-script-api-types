import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Tika } from '../../../../../org/apache/tika/Tika.d.ts'
export class HttpResponseKt extends Object {
    static getTika(): Tika;
    static httpBadRequest(paramarg0: string): FullHttpResponse;
    static httpFile(paramarg0: File): FullHttpResponse;
    static httpFileStream(paramarg0: InputStream): FullHttpResponse;
    static httpFileStream(paramarg0: InputStream, paramarg1: string): FullHttpResponse;
    static httpFileStream(paramarg0: InputStream, paramarg1: string, paramarg2: number): FullHttpResponse;
    static httpForbidden(paramarg0: string): FullHttpResponse;
    static httpInternalServerError(paramarg0: string): FullHttpResponse;
    static httpMethodNotAllowed(paramarg0: string): FullHttpResponse;
    static httpNoContent(): FullHttpResponse;
    static httpNotFound(paramarg0: string, paramarg1: string): FullHttpResponse;
    static httpOk(paramarg0: Object | null): FullHttpResponse;
    static httpOk(paramarg0: Object | null, paramarg1: Gson): FullHttpResponse;
    static httpOk(paramarg0: JsonElement): FullHttpResponse;
    static httpOk(paramarg0: JsonElement, paramarg1: Gson): FullHttpResponse;
    static httpResponse(paramarg0: HttpResponseStatus, paramarg1: Object | null): FullHttpResponse;
    static httpResponse(paramarg0: HttpResponseStatus, paramarg1: Object | null, paramarg2: Gson): FullHttpResponse;
    static httpResponse(paramarg0: HttpResponseStatus, paramarg1: JsonElement): FullHttpResponse;
    static httpResponse(paramarg0: HttpResponseStatus, paramarg1: JsonElement, paramarg2: Gson): FullHttpResponse;
    static httpResponse(paramarg0: HttpResponseStatus, paramarg1: string, paramarg2: ByteBuf): FullHttpResponse;
    static httpResponse(paramarg0: HttpResponseStatus, paramarg1: string, paramarg2: string): FullHttpResponse;
    static httpServiceUnavailable(paramarg0: string): FullHttpResponse;
    static httpTooManyRequests(paramarg0: string): FullHttpResponse;
    static httpUnauthorized(paramarg0: string): FullHttpResponse;
}