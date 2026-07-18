import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { ApplicationConfig } from '../../../../io/ktor/server/config/ApplicationConfig.d.ts'
import type { EnginePipeline } from '../../../../io/ktor/server/engine/EnginePipeline.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DefaultEnginePipelineKt extends Object {
    static defaultEnginePipeline(config: ApplicationConfig, developmentMode: boolean): EnginePipeline;
    static defaultExceptionStatusCode(cause: Throwable): HttpStatusCode | null;
    static handleFailure(call: ApplicationCall, error: Throwable): void;
    static logError(call: ApplicationCall, error: Throwable): void;
}