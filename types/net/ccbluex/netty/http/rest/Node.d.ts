import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../../../kotlin/jvm/functions/Function2.d.ts'
import type { ApplicationCall } from '../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
import type { RequestHandler } from '../../../../../net/ccbluex/netty/http/model/RequestHandler.d.ts'
export class Node extends Object {
    constructor(part: string)
    // private handlers: Map<HttpMethod, Function2<Object, Object, Object>>;
    /*not mapped: */ isExecutable(): boolean;
    // private isParam: boolean;
    /*not mapped: */ isParam(): boolean;
    // private isRoot: boolean;
    /*not mapped: */ isRoot(): boolean;
    // private nodes: Node[];
    /*not mapped: */ getNodes$netty_httpserver(): Node[];
    readonly part: string;
    // private chain(destination: Function1<string, Node>, parts: string[]): Node;
    delete(path: string, handler: RequestHandler): Node;
    delete(path: string, handler: Function2<Object, Object, Object>): Node;
    delete(handler: RequestHandler): Node;
    delete(handler: Function2<Object, Object, Object>): Node;
    file(path: string, baseFolder: File): Node;
    get(path: string, handler: RequestHandler): Node;
    get(path: string, handler: Function2<Object, Object, Object>): Node;
    get(handler: RequestHandler): Node;
    get(handler: Function2<Object, Object, Object>): Node;
    handle(call: ApplicationCall): FullHttpResponse;
    head(path: string, handler: RequestHandler): Node;
    head(path: string, handler: Function2<Object, Object, Object>): Node;
    head(handler: RequestHandler): Node;
    head(handler: Function2<Object, Object, Object>): Node;
    matches(index: number, part: string): boolean;
    matchesMethod(method: HttpMethod): boolean;
    options(path: string, handler: RequestHandler): Node;
    options(path: string, handler: Function2<Object, Object, Object>): Node;
    options(handler: RequestHandler): Node;
    options(handler: Function2<Object, Object, Object>): Node;
    patch(path: string, handler: RequestHandler): Node;
    patch(path: string, handler: Function2<Object, Object, Object>): Node;
    patch(handler: RequestHandler): Node;
    patch(handler: Function2<Object, Object, Object>): Node;
    post(path: string, handler: RequestHandler): Node;
    post(path: string, handler: Function2<Object, Object, Object>): Node;
    post(handler: RequestHandler): Node;
    post(handler: Function2<Object, Object, Object>): Node;
    put(path: string, handler: RequestHandler): Node;
    put(path: string, handler: Function2<Object, Object, Object>): Node;
    put(handler: RequestHandler): Node;
    put(handler: Function2<Object, Object, Object>): Node;
    registerMethodHandler(method: HttpMethod, handler: Function2<Object, Object, Object>): Node;
    route(path: string, block: Function1<Node, void>): Node;
    route(path: string, method: HttpMethod, handler: RequestHandler): Node;
    route(path: string, method: HttpMethod, handler: Function2<Object, Object, Object>): Node;
    trace(path: string, handler: RequestHandler): Node;
    trace(path: string, handler: Function2<Object, Object, Object>): Node;
    trace(handler: RequestHandler): Node;
    trace(handler: Function2<Object, Object, Object>): Node;
    withPath(path: string, block: Function1<Node, void>): Node;
    zip(path: string, zipInputStream: InputStream): Node;
}