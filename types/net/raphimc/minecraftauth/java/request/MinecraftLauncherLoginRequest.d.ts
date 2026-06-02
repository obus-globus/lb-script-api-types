import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MinecraftToken } from '../../../../../net/raphimc/minecraftauth/java/model/MinecraftToken.d.ts'
import type { MinecraftServicesResponseHandler } from '../../../../../net/raphimc/minecraftauth/java/responsehandler/MinecraftServicesResponseHandler.d.ts'
import type { XblXstsToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class MinecraftLauncherLoginRequest extends PostRequest implements MinecraftServicesResponseHandler<MinecraftToken> {
    constructor(arg0: XblXstsToken)
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MinecraftToken;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}