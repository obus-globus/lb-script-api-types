import type { Events } from '../../../../io/ktor/events/Events.d.ts'
import type { ApplicationCallPipeline } from '../../../../io/ktor/server/application/ApplicationCallPipeline.d.ts'
import type { ApplicationCallPipeline$ApplicationPhase } from '../../../../io/ktor/server/application/ApplicationCallPipeline$ApplicationPhase.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationEngine } from '../../../../io/ktor/server/engine/ApplicationEngine.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CompletableJob } from '../../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { CoroutineScope } from '../../../../kotlinx/coroutines/CoroutineScope.d.ts'
export class Application extends ApplicationCallPipeline implements CoroutineScope {
    static ApplicationPhase: ApplicationCallPipeline$ApplicationPhase;
    constructor(environment: ApplicationEnvironment, developmentMode: boolean, rootPath: string, monitor: Events, parentCoroutineContext: CoroutineContext, engineProvider: () => ApplicationEngine)
    // private applicationJob: CompletableJob;
    readonly coroutineContext: CoroutineContext;
    readonly engine: ApplicationEngine;
    // private engineProvider: () => ApplicationEngine;
    readonly monitor: Events;
    readonly parentCoroutineContext: CoroutineContext;
    rootPath: string;
    dispose(): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    disposeAndJoin($completion: Continuation<void>): any;
}