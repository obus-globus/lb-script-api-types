import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { DynamicApplicationModule } from '../../../../io/ktor/server/application/DynamicApplicationModule.d.ts'
import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface ApplicationModuleLoader extends Object{
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    loadModules(application: Application, classLoader: ClassLoader, modules: DynamicApplicationModule[], $completion: Continuation<void>): any;
}