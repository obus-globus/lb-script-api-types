import type { ApplicationEngine } from '../../../../io/ktor/server/engine/ApplicationEngine.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationEngineJvmKt extends Object {
    static stop(self: ApplicationEngine, gracePeriod: number, timeout: number, timeUnit: TimeUnit): void;
}