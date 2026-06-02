import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { XblDeviceToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblDeviceToken.d.ts'
import type { XblTitleToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblTitleToken.d.ts'
import type { XblUserToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblUserToken.d.ts'
import type { XblXstsToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
import type { XblResponseHandler } from '../../../../../net/raphimc/minecraftauth/xbl/responsehandler/XblResponseHandler.d.ts'
export class XblXstsAuthorizeRequest extends PostRequest implements XblResponseHandler<XblXstsToken> {
    constructor(arg0: XblDeviceToken, arg1: XblUserToken, arg2: XblTitleToken, arg3: string)
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): XblXstsToken;
    handle<R extends Object | number | string | boolean>(arg0: HttpResponse): R;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}