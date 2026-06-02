import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { ApiHttpRequestException } from '../../../../../net/raphimc/minecraftauth/util/http/exception/ApiHttpRequestException.d.ts'
export class MinecraftRequestException extends ApiHttpRequestException {
    constructor(arg0: HttpResponse, arg1: string, arg2: string)
}