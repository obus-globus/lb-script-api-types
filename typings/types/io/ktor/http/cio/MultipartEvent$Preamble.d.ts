import type { MultipartEvent } from '../../../../io/ktor/http/cio/MultipartEvent.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class MultipartEvent$Preamble extends MultipartEvent {
    constructor(body: Source)
    readonly body: Source;
    release(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    releaseSuspend($completion: Continuation<void>): any;
}