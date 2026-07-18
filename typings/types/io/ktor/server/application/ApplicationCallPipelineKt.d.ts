import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { PipelineCall } from '../../../../io/ktor/server/application/PipelineCall.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ApplicationCallPipelineKt extends Object {
    static getApplication(paramarg0: PipelineContext<Object, PipelineCall>): Application;
    static getCall(paramarg0: PipelineContext<Object, PipelineCall>): PipelineCall;
}