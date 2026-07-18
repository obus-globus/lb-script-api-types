import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { PipelineCall } from '../../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { StatusPagesConfig } from '../../../../../io/ktor/server/plugins/statuspages/StatusPagesConfig.d.ts'
import type { PipelineContext } from '../../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class StatusPagesJvmKt extends Object {
    static exception<T extends Throwable>(self: StatusPagesConfig, klass: Class<T>, handler: (param0: PipelineContext<void, PipelineCall>, param1: T) => void): void;
    static statusFile(self: StatusPagesConfig, code: HttpStatusCode[], filePattern: string): void;
}