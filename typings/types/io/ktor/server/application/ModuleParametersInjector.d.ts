import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
export interface ModuleParametersInjector extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    resolveParameter(application: Application, parameter: KParameter, $completion: Continuation<Object>): any;
}