import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class DynamicApplicationModule extends Object {
    constructor(reference: string | null, function_: (param0: Application, param1: ClassLoader) => void)
    readonly function: (param0: Application, param1: ClassLoader) => void;
    readonly reference: string | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    invoke(application: Application, classLoader: ClassLoader, $completion: Continuation<void>): any;
}