import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent } from '../../../../io/ktor/http/content/OutgoingContent.d.ts'
import type { OutgoingContent$NoContent } from '../../../../io/ktor/http/content/OutgoingContent$NoContent.d.ts'
import type { OutgoingContent$ProtocolUpgrade } from '../../../../io/ktor/http/content/OutgoingContent$ProtocolUpgrade.d.ts'
import type { OutgoingContent$WriteChannelContent } from '../../../../io/ktor/http/content/OutgoingContent$WriteChannelContent.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { BaseApplicationResponse$Companion } from '../../../../io/ktor/server/engine/BaseApplicationResponse$Companion.d.ts'
import type { ApplicationSendPipeline } from '../../../../io/ktor/server/response/ApplicationSendPipeline.d.ts'
import type { PipelineResponse } from '../../../../io/ktor/server/response/PipelineResponse.d.ts'
import type { ResponseCookies } from '../../../../io/ktor/server/response/ResponseCookies.d.ts'
import type { ResponseHeaders } from '../../../../io/ktor/server/response/ResponseHeaders.d.ts'
import type { ResponsePushBuilder } from '../../../../io/ktor/server/response/ResponsePushBuilder.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export abstract class BaseApplicationResponse extends Object implements PipelineResponse {
    static Companion: BaseApplicationResponse$Companion;
    constructor(call: PipelineCall)
    readonly call: PipelineCall;
    readonly cookies: ResponseCookies;
    /*not mapped: */ getHeaders(): ResponseHeaders;
    /*not mapped: */ isCommitted(): boolean;
    // private isSent: boolean;
    /*not mapped: */ isSent(): boolean;
    readonly pipeline: ApplicationSendPipeline;
    // private responded: boolean;
    // private status: HttpStatusCode | null;
    protected commitHeaders(content: OutgoingContent): void;
    // private ensureLength(expected: number, actual: number): void;
    push(builder: ResponsePushBuilder): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondFromBytes(bytes: number[], $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondFromChannel(readChannel: ByteReadChannel, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondNoContent(content: OutgoingContent$NoContent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondOutgoingContent(content: OutgoingContent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondUpgrade(upgrade: OutgoingContent$ProtocolUpgrade, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected respondWriteChannelContent(content: OutgoingContent$WriteChannelContent, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    protected responseChannel($completion: Continuation<ByteWriteChannel>): any;
    protected setStatus(statusCode: HttpStatusCode): void;
    status(): HttpStatusCode | null;
    status(value: HttpStatusCode): void;
}