import type { ASocket } from '../../../../io/ktor/network/sockets/ASocket.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface Acceptable<S extends ASocket> extends ASocket, Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    accept($completion: Continuation<S>): any;
    close(): void;
    dispose(): void;
}