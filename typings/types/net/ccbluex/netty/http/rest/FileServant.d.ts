import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { ApplicationCall } from '../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class FileServant extends Node {
    constructor(part: string, baseFolder: File)
    // private baseFolder: File;
    // private isExecutable: boolean;
    /*not mapped: */ isExecutable(): boolean;
    handle(call: ApplicationCall): FullHttpResponse;
    matches(index: number, part: string): boolean;
    matchesMethod(method: HttpMethod): boolean;
}