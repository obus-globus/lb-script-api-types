import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { ApplicationCall } from '../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class RoutingContext extends Object {
    constructor(call: ApplicationCall, route: Node)
    readonly body: string;
    readonly call: ApplicationCall;
    readonly headers: Map$Entry<string, string>[];
    readonly method: HttpMethod;
    readonly parameters: { [key: string]: string };
    readonly path: string;
    readonly queryParameters: { [key: string]: string };
    readonly remainingPath: string;
    readonly route: Node;
    readonly uri: string;
    badRequest(reason: string): void;
    forbidden(reason: string): void;
    internalServerError(reason: string): void;
    notFound(path: string, reason: string): void;
    receive<T extends unknown>(gson: Gson): T;
    respond(body: JsonElement, gson: Gson): void;
    respond(response: FullHttpResponse): void;
    respond(status: HttpResponseStatus, body: JsonElement, gson: Gson): void;
    respond(status: HttpResponseStatus, body: Object, gson: Gson): void;
    respond(body: Object, gson: Gson): void;
    respondFile(file: File): void;
    respondFileStream(stream: InputStream, contentType: string | null, contentLength: number): void;
    respondNoContent(): void;
    serviceUnavailable(reason: string): void;
    unauthorized(reason: string): void;
}