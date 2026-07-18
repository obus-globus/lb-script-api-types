import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { PipelineContext } from '../../../../io/ktor/util/pipeline/PipelineContext.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PipelineCallKt extends Object {
    static getCall<C extends ApplicationCall>(paramarg0: PipelineContext<Object, C>): C;
    static getReceiveType(paramarg0: ApplicationCall): TypeInfo;
    static isHandled(paramarg0: ApplicationCall): boolean;
    static setReceiveType(paramarg0: ApplicationCall, paramarg1: TypeInfo): void;
}