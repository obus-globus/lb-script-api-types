import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { ApiHttpRequestException } from '../../../../../net/raphimc/minecraftauth/util/http/exception/ApiHttpRequestException.d.ts'
export class XblRequestException extends ApiHttpRequestException {
    static ERRORS: { [key: number]: string };
    static ERROR_MESSAGES: { [key: number]: string };
    constructor(arg0: HttpResponse, arg1: number)
    readonly errorCode: number;
    getErrorCode(): number;
}