import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent } from '../../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { OutgoingContent$ProtocolUpgrade } from '../../../../../io/ktor/http/content/OutgoingContent$ProtocolUpgrade.d.ts'
import type { BaseApplicationResponse$Companion } from '../../../../../io/ktor/server/engine/BaseApplicationResponse$Companion.d.ts'
import type { NettyApplicationCall } from '../../../../../io/ktor/server/netty/NettyApplicationCall.d.ts'
import type { NettyApplicationResponse } from '../../../../../io/ktor/server/netty/NettyApplicationResponse.d.ts'
import type { NettyHttp2Handler } from '../../../../../io/ktor/server/netty/http2/NettyHttp2Handler.d.ts'
import type { ResponseHeaders } from '../../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { ResponsePushBuilder } from '../../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class NettyHttp2ApplicationResponse extends NettyApplicationResponse {
    static Companion: BaseApplicationResponse$Companion;
    constructor(call: NettyApplicationCall, handler: NettyHttp2Handler, context: ChannelHandlerContext, engineContext: CoroutineContext, userContext: CoroutineContext)
    readonly handler: NettyHttp2Handler;
    readonly headers: ResponseHeaders;
    // private responseHeaders: (Object | null)[];
    // private responseTrailers: (Object | null)[];
    // private trailers: ResponseHeaders;
    prepareTrailerMessage(): Object | null;
    push(builder: ResponsePushBuilder): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondOutgoingContent(content: OutgoingContent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondUpgrade(upgrade: OutgoingContent$ProtocolUpgrade, $completion: Continuation<void>): any;
    protected responseMessage(chunked: boolean, last: boolean): Object;
    protected responseMessage(chunked: boolean, data: number[]): Object;
    protected setStatus(statusCode: HttpStatusCode): void;
}