import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { Headers } from '../../../../io/ktor/http/Headers.d.ts'
import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { OutgoingContent$WriteChannelContent } from '../../../../io/ktor/http/content/OutgoingContent$WriteChannelContent.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { ContentEncoder } from '../../../../io/ktor/util/ContentEncoder.d.ts'
import type { ByteWriteChannel } from '../../../../io/ktor/utils/io/ByteWriteChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
export class CompressedWriteChannelResponse extends OutgoingContent$WriteChannelContent {
    constructor(original: OutgoingContent$WriteChannelContent, encoder: ContentEncoder, coroutineContext: CoroutineContext)
    readonly contentLength: number | null;
    readonly contentType: ContentType | null;
    readonly coroutineContext: CoroutineContext;
    readonly encoder: ContentEncoder;
    readonly headers: Headers;
    readonly original: OutgoingContent$WriteChannelContent;
    readonly status: HttpStatusCode | null;
    getProperty<T extends unknown>(key: AttributeKey<T>): T | null;
    setProperty<T extends unknown>(key: AttributeKey<T>, value: T | null): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    writeTo(channel: ByteWriteChannel, $completion: Continuation<void>): any;
}