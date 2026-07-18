import type { Parameters } from '../../../../io/ktor/http/Parameters.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PipelineRequestKt extends Object {
    static encodeParameters(self: ApplicationRequest, parameters: Parameters): Parameters;
}