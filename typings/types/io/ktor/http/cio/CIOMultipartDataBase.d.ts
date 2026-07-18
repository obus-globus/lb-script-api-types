import type { MultipartEvent } from '../../../../io/ktor/http/cio/MultipartEvent.d.ts'
import type { MultipartEvent$MultipartPart } from '../../../../io/ktor/http/cio/MultipartEvent$MultipartPart.d.ts'
import type { MultiPartData } from '../../../../io/ktor/http/content/MultiPartData.d.ts'
import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
import type { ByteReadChannel } from '../../../../io/ktor/utils/io/ByteReadChannel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { ReceiveChannel } from '../../../../kotlinx/coroutines/channels/ReceiveChannel.d.ts'
export class CIOMultipartDataBase extends Object implements MultiPartData, CoroutineScope {
    constructor(coroutineContext: CoroutineContext, channel: ByteReadChannel, contentType: CharSequence, contentLength: number | null, formFieldLimit: number)
    readonly coroutineContext: CoroutineContext;
    // private events: ReceiveChannel<MultipartEvent>;
    // private previousPart: PartData | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private eventToData(event: MultipartEvent, $completion: Continuation<PartData>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private partToData(part: MultipartEvent$MultipartPart, $completion: Continuation<PartData>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    readPart($completion: Continuation<PartData>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private readPartSuspend($completion: Continuation<PartData>): any;
}