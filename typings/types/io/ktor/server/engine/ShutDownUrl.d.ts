import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ShutDownUrl$Companion } from '../../../../io/ktor/server/engine/ShutDownUrl$Companion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class ShutDownUrl extends Object {
    static Companion: ShutDownUrl$Companion;
    constructor(url: string, exitCode: (param0: ApplicationCall) => number, exit: (param0: number) => void)
    readonly exit: (param0: number) => void;
    readonly exitCode: (param0: ApplicationCall) => number;
    readonly url: string;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    doShutdown(call: ApplicationCall, $completion: Continuation<void>): any;
}