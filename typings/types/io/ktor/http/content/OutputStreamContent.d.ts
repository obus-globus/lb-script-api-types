import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$WriteChannelContent } from '../../../../io/ktor/http/content/OutgoingContent$WriteChannelContent.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class OutputStreamContent extends OutgoingContent$WriteChannelContent {
    constructor(body: (param0: OutputStream) => void, contentType: ContentType, status: HttpStatusCode | null, contentLength: number | null)
    // private body: (param0: OutputStream) => void;
    readonly contentLength: number | null;
    readonly contentType: ContentType;
    readonly status: HttpStatusCode | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    writeTo(channel: ByteWriteChannel, $completion: Continuation<void>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    writeTo(stream: OutputStream, $completion: Continuation<void>): any;
}