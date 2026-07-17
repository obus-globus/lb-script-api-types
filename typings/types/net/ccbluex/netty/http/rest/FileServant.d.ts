import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { File } from '../../../../../java/io/File.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ApplicationCall } from '../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class FileServant extends Node {
    constructor(part: string, baseFolder: File)
    // private baseFolder: File;
    // private isExecutable: boolean;
    /*not mapped: */ isExecutable(): boolean;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    handle(call: ApplicationCall, $completion: Continuation<FullHttpResponse>): any;
    matches(index: number, part: string): boolean;
    matchesMethod(method: HttpMethod): boolean;
}