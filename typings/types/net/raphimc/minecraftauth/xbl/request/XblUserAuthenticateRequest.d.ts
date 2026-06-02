import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MsaApplicationConfig } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { XblUserToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblUserToken.d.ts'
import type { XblResponseHandler } from '../../../../../net/raphimc/minecraftauth/xbl/responsehandler/XblResponseHandler.d.ts'
export class XblUserAuthenticateRequest extends PostRequest implements XblResponseHandler<XblUserToken> {
    constructor(arg0: MsaApplicationConfig, arg1: MsaToken)
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): XblUserToken;
    handle<R extends Object | number | string | boolean>(arg0: HttpResponse): R;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}