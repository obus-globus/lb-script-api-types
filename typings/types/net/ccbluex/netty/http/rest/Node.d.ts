import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ApplicationCall } from '../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
import type { RequestHandler } from '../../../../../net/ccbluex/netty/http/model/RequestHandler.d.ts'
import type { RoutingContext } from '../../../../../net/ccbluex/netty/http/routing/RoutingContext.d.ts'
export class Node extends Object {
    constructor(part: string)
    // private handlers: Map<HttpMethod, (param0: RoutingContext) => void>;
    /*not mapped: */ isExecutable(): boolean;
    // private isParam: boolean;
    /*not mapped: */ isParam(): boolean;
    // private isRoot: boolean;
    /*not mapped: */ isRoot(): boolean;
    // private nodes: Node[];
    /*not mapped: */ getNodes$netty_httpserver(): Node[];
    readonly part: string;
    // private chain(destination: (param0: string) => Node, parts: string[]): Node;
    delete(path: string, handler: RequestHandler): Node;
    delete(path: string, handler: (param0: RoutingContext) => void): Node;
    delete(handler: RequestHandler): Node;
    delete(handler: (param0: RoutingContext) => void): Node;
    file(path: string, baseFolder: File): Node;
    get(path: string, handler: RequestHandler): Node;
    get(path: string, handler: (param0: RoutingContext) => void): Node;
    get(handler: RequestHandler): Node;
    get(handler: (param0: RoutingContext) => void): Node;
    handle(call: ApplicationCall): FullHttpResponse;
    head(path: string, handler: RequestHandler): Node;
    head(path: string, handler: (param0: RoutingContext) => void): Node;
    head(handler: RequestHandler): Node;
    head(handler: (param0: RoutingContext) => void): Node;
    matches(index: number, part: string): boolean;
    matchesMethod(method: HttpMethod): boolean;
    options(path: string, handler: RequestHandler): Node;
    options(path: string, handler: (param0: RoutingContext) => void): Node;
    options(handler: RequestHandler): Node;
    options(handler: (param0: RoutingContext) => void): Node;
    patch(path: string, handler: RequestHandler): Node;
    patch(path: string, handler: (param0: RoutingContext) => void): Node;
    patch(handler: RequestHandler): Node;
    patch(handler: (param0: RoutingContext) => void): Node;
    post(path: string, handler: RequestHandler): Node;
    post(path: string, handler: (param0: RoutingContext) => void): Node;
    post(handler: RequestHandler): Node;
    post(handler: (param0: RoutingContext) => void): Node;
    put(path: string, handler: RequestHandler): Node;
    put(path: string, handler: (param0: RoutingContext) => void): Node;
    put(handler: RequestHandler): Node;
    put(handler: (param0: RoutingContext) => void): Node;
    registerMethodHandler(method: HttpMethod, handler: (param0: RoutingContext) => void): Node;
    route(path: string, block: (param0: Node) => void): Node;
    route(path: string, method: HttpMethod, handler: RequestHandler): Node;
    route(path: string, method: HttpMethod, handler: (param0: RoutingContext) => void): Node;
    trace(path: string, handler: RequestHandler): Node;
    trace(path: string, handler: (param0: RoutingContext) => void): Node;
    trace(handler: RequestHandler): Node;
    trace(handler: (param0: RoutingContext) => void): Node;
    withPath(path: string, block: (param0: Node) => void): Node;
    zip(path: string, zipInputStream: InputStream): Node;
}