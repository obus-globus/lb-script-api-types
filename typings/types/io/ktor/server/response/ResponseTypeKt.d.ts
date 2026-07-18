import type { ApplicationResponse } from '../../../../io/ktor/server/response/ApplicationResponse.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ResponseTypeKt extends Object {
    static getResponseType(paramarg0: ApplicationResponse): TypeInfo;
    static setResponseType(paramarg0: ApplicationResponse, paramarg1: TypeInfo): void;
}