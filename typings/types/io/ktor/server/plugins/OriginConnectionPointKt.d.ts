import type { RequestConnectionPoint } from '../../../../io/ktor/http/RequestConnectionPoint.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { MutableOriginConnectionPoint } from '../../../../io/ktor/server/plugins/MutableOriginConnectionPoint.d.ts'
import type { ApplicationRequest } from '../../../../io/ktor/server/request/ApplicationRequest.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OriginConnectionPointKt extends Object {
    static getMutableOriginConnectionPoint(paramarg0: ApplicationCall): MutableOriginConnectionPoint;
    static getMutableOriginConnectionPointKey(): AttributeKey<MutableOriginConnectionPoint>;
    static getOrigin(paramarg0: ApplicationRequest): RequestConnectionPoint;
}