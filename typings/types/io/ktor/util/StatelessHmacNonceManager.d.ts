import type { NonceManager } from '../../../io/ktor/util/NonceManager.d.ts'
import type { SecretKeySpec } from '../../../javax/crypto/spec/SecretKeySpec.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
export class StatelessHmacNonceManager extends Object implements NonceManager {
    constructor(keySpec: SecretKeySpec, algorithm: string, timeoutMillis: number, nonceGenerator: () => string)
    constructor(key: number[], algorithm: string, timeoutMillis: number, nonceGenerator: () => string)
    readonly algorithm: string;
    readonly keySpec: SecretKeySpec;
    // private macLength: number;
    readonly nonceGenerator: () => string;
    readonly timeoutMillis: number;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    newNonce($completion: Continuation<string>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    verifyNonce(nonce: string, $completion: Continuation<boolean>): any;
}