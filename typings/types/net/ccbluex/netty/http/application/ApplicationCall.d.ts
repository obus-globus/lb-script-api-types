import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class ApplicationCall extends Object {
    constructor(uri: string, path: string, remainingPath: string, method: HttpMethod, body: string, parameters: JavaMap<string, string>, queryParameters: JavaMap<string, string>, headers: Map$Entry<string, string>[])
    readonly body: string;
    readonly headers: Map$Entry<string, string>[];
    readonly method: HttpMethod;
    readonly parameters: JavaMap<string, string>;
    readonly path: string;
    readonly queryParameters: JavaMap<string, string>;
    readonly remainingPath: string;
    // private response: FullHttpResponse | null;
    readonly uri: string;
    // private abort(response: FullHttpResponse): void;
    badRequest(reason: string): void;
    forbidden(reason: string): void;
    internalServerError(reason: string): void;
    notFound(path: string, reason: string): void;
    receive<T extends unknown>(gson: Gson): T;
    respond(body: JsonElement, gson?: Gson): void;
    respond(response: FullHttpResponse): void;
    respond(status: HttpResponseStatus, body: JsonElement, gson?: Gson): void;
    respond(status: HttpResponseStatus, body: Object, gson?: Gson): void;
    respond(body: Object, gson?: Gson): void;
    respondFile(file: File): void;
    respondFileStream(stream: InputStream, contentType?: string | null, contentLength?: number): void;
    respondNoContent(): void;
    respondOutputStream(contentType: string | null, status: HttpResponseStatus, contentLength: number, producer: (param0: OutputStream) => void): void;
    serviceUnavailable(reason: string): void;
    takeResponse(): FullHttpResponse;
    unauthorized(reason: string): void;
}