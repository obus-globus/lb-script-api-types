import type { Events } from '../../../../io/ktor/events/Events.d.ts'
import type { ApplicationEnvironment } from '../../../../io/ktor/server/application/ApplicationEnvironment.d.ts'
import type { ApplicationEngine } from '../../../../io/ktor/server/engine/ApplicationEngine.d.ts'
import type { EngineConnectorConfig } from '../../../../io/ktor/server/engine/EngineConnectorConfig.d.ts'
import type { EnginePipeline } from '../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CompletableDeferred } from '../../../../kotlinx/coroutines/CompletableDeferred.d.ts'
export abstract class BaseApplicationEngine extends Object implements ApplicationEngine {
    constructor(environment: ApplicationEnvironment, monitor: Events, developmentMode: boolean, pipeline: EnginePipeline)
    readonly environment: ApplicationEnvironment;
    // private monitor: Events;
    // private /*not mapped: */ getMonitor(): Events;
    readonly pipeline: EnginePipeline;
    // private resolvedConnectorsDeferred: CompletableDeferred<EngineConnectorConfig[]>;
    // private /*not mapped: */ getResolvedConnectorsDeferred(): CompletableDeferred<EngineConnectorConfig[]>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    resolvedConnectors($completion: Continuation<EngineConnectorConfig[]>): any;
    start(wait: boolean): ApplicationEngine;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    startSuspend(wait: boolean, $completion: Continuation<ApplicationEngine>): any;
    stop(gracePeriodMillis: number, timeoutMillis: number): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    stopSuspend(gracePeriodMillis: number, timeoutMillis: number, $completion: Continuation<void>): any;
}