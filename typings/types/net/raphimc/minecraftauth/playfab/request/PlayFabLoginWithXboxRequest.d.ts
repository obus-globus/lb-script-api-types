import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { PlayFabToken } from '../../../../../net/raphimc/minecraftauth/playfab/model/PlayFabToken.d.ts'
import type { PlayFabResponseHandler } from '../../../../../net/raphimc/minecraftauth/playfab/responsehandler/PlayFabResponseHandler.d.ts'
import type { XblXstsToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class PlayFabLoginWithXboxRequest extends PostRequest implements PlayFabResponseHandler<PlayFabToken> {
    constructor(arg0: XblXstsToken, arg1: string)
    handle(arg0: HttpResponse): PlayFabToken;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): PlayFabToken;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}