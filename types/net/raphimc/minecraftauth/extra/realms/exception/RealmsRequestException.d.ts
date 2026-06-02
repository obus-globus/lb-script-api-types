import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { ApiHttpRequestException } from '../../../../../../net/raphimc/minecraftauth/util/http/exception/ApiHttpRequestException.d.ts'
export class RealmsRequestException extends ApiHttpRequestException {
    static ERROR_TOS_NOT_ACCEPTED: number;
    constructor(arg0: HttpResponse, arg1: number, arg2: string)
    readonly errorCode: number;
    getErrorCode(): number;
}