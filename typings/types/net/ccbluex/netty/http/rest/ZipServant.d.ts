import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ApplicationCall } from '../../../../../net/ccbluex/netty/http/application/ApplicationCall.d.ts'
import type { Node } from '../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
import type { ZipServant$ZipFileEntry } from '../../../../../net/ccbluex/netty/http/rest/ZipServant$ZipFileEntry.d.ts'
export class ZipServant extends Node {
    constructor(part: string, zipInputStream: InputStream)
    // private isExecutable: boolean;
    /*not mapped: */ isExecutable(): boolean;
    // private zipFiles: JavaMap<string, ZipServant$ZipFileEntry>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    handle(call: ApplicationCall, $completion: Continuation<FullHttpResponse>): any;
    // private loadZipData(zipInputStream: InputStream): JavaMap<string, ZipServant$ZipFileEntry>;
    matchesMethod(method: HttpMethod): boolean;
}