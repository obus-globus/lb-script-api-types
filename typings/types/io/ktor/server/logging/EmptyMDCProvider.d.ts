import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { MDCProvider } from '../../../../io/ktor/server/logging/MDCProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class EmptyMDCProvider extends Object implements MDCProvider {
    static INSTANCE: EmptyMDCProvider;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    withMDCBlock(call: ApplicationCall, block: () => void, $completion: Continuation<void>): any;
}