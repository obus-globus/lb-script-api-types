import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$ProtocolUpgrade } from '../../../../../io/ktor/http/content/OutgoingContent$ProtocolUpgrade.d.ts'
import type { BaseApplicationResponse$Companion } from '../../../../../io/ktor/server/engine/BaseApplicationResponse$Companion.d.ts'
import type { NettyApplicationCall } from '../../../../../io/ktor/server/netty/NettyApplicationCall.d.ts'
import type { NettyApplicationResponse } from '../../../../../io/ktor/server/netty/NettyApplicationResponse.d.ts'
import type { ResponseHeaders } from '../../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class NettyHttp1ApplicationResponse extends NettyApplicationResponse {
    static Companion: BaseApplicationResponse$Companion;
    constructor(call: NettyApplicationCall, context: ChannelHandlerContext, engineContext: CoroutineContext, userContext: CoroutineContext, protocol: HttpVersion)
    readonly headers: ResponseHeaders;
    readonly protocol: HttpVersion;
    // private responseHeaders: (Object | null)[];
    // private responseStatus: HttpResponseStatus;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondUpgrade(upgrade: OutgoingContent$ProtocolUpgrade, $completion: Continuation<void>): any;
    protected responseMessage(chunked: boolean, last: boolean): Object;
    protected responseMessage(chunked: boolean, data: number[]): Object;
    // private setChunked(message: HttpResponse): void;
    protected setStatus(statusCode: HttpStatusCode): void;
}