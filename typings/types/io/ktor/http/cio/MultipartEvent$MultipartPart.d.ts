import type { HttpHeadersMap } from '../../../../io/ktor/http/cio/HttpHeadersMap.d.ts'
import type { MultipartEvent } from '../../../../io/ktor/http/cio/MultipartEvent.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Deferred } from '../../../../kotlinx/coroutines/Deferred.d.ts'
export class MultipartEvent$MultipartPart extends MultipartEvent {
    constructor(headers: Deferred<HttpHeadersMap>, body: ByteReadChannel)
    readonly body: ByteReadChannel;
    readonly headers: Deferred<HttpHeadersMap>;
    release(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    releaseSuspend($completion: Continuation<void>): any;
}