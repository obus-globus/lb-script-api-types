import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { ApiHttpRequestException } from '../../../../../net/raphimc/minecraftauth/util/http/exception/ApiHttpRequestException.d.ts'
export class XblRequestException extends ApiHttpRequestException {
    static ERRORS: JavaMap<number, string>;
    static ERROR_MESSAGES: JavaMap<number, string>;
    constructor(arg0: HttpResponse, arg1: number)
    readonly errorCode: number;
    getErrorCode(): number;
}