import type { MultiPartData } from '../../../../io/ktor/http/content/MultiPartData.d.ts'
import type { PartData } from '../../../../io/ktor/http/content/PartData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class MultiPartData$Empty extends Object implements MultiPartData {
    static INSTANCE: MultiPartData$Empty;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    readPart($completion: Continuation<PartData>): any;
}