import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationEngine } from '../../../../io/ktor/server/engine/ApplicationEngine.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompletableJob } from '../../../../kotlinx/coroutines/CompletableJob.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class EngineContextCancellationHelperKt extends Object {
    static launchOnCancellation(self: Job, block: () => void): CompletableJob;
    static stopServerOnCancellation(self: ApplicationEngine, application: Application, gracePeriodMillis: number, timeoutMillis: number): CompletableJob;
}