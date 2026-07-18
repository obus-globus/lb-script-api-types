import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface MultiPartData extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    readPart($completion: Continuation<PartData>): any;
}