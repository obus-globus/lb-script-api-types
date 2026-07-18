import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export interface ApplicationEngine extends Object{
    readonly environment: ApplicationEnvironment;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    resolvedConnectors($completion: Continuation<EngineConnectorConfig[]>): any;
    start(wait: boolean): ApplicationEngine;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    startSuspend(wait: boolean, $completion: Continuation<ApplicationEngine>): any;
    stop(gracePeriodMillis: number, timeoutMillis: number): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    stopSuspend(gracePeriodMillis: number, timeoutMillis: number, $completion: Continuation<void>): any;
}