import type { NonceManager } from '../../../io/ktor/util/NonceManager.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class GenerateOnlyNonceManager extends Object implements NonceManager {
    static INSTANCE: GenerateOnlyNonceManager;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    newNonce($completion: Continuation<string>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    verifyNonce(nonce: string, $completion: Continuation<boolean>): any;
}