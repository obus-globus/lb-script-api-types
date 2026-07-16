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
    static httpBadRequest(reason: string): FullHttpResponse;
    static httpFile(file: File): FullHttpResponse;
    static httpFileStream(paramarg0: InputStream): FullHttpResponse;
    static httpFileStream(paramarg0: InputStream, paramarg1: string): FullHttpResponse;
    static httpFileStream(stream: InputStream, contentType: string | null, contentLength: number): FullHttpResponse;
    static httpForbidden(reason: string): FullHttpResponse;
    static httpInternalServerError(exception: string): FullHttpResponse;
    static httpMethodNotAllowed(method: string): FullHttpResponse;
    static httpNoContent(): FullHttpResponse;
    static httpNotFound(path: string, reason: string): FullHttpResponse;
    static httpOk<T extends unknown>(paramarg0: T): FullHttpResponse;
    static httpOk<T extends unknown>(json: T, gson: Gson): FullHttpResponse;
    static httpOk(paramarg0: JsonElement): FullHttpResponse;
    static httpOk(jsonElement: JsonElement, gson: Gson): FullHttpResponse;
    static httpResponse<T extends unknown>(paramarg0: HttpResponseStatus, paramarg1: T): FullHttpResponse;
    static httpResponse<T extends unknown>(status: HttpResponseStatus, json: T, gson: Gson): FullHttpResponse;
    static httpResponse(paramarg0: HttpResponseStatus, paramarg1: JsonElement): FullHttpResponse;
    static httpResponse(status: HttpResponseStatus, json: JsonElement, gson: Gson): FullHttpResponse;
    static httpResponse(status: HttpResponseStatus, contentType: string, content: ByteBuf): FullHttpResponse;
    static httpResponse(status: HttpResponseStatus, contentType: string, content: string): FullHttpResponse;
    static httpServiceUnavailable(reason: string): FullHttpResponse;
    static httpTooManyRequests(reason: string): FullHttpResponse;
    static httpUnauthorized(reason: string): FullHttpResponse;
}