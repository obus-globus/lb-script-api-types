import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { PlayFabEntityToken } from '../../../../../net/raphimc/minecraftauth/playfab/model/PlayFabEntityToken.d.ts'
import type { PlayFabResponseHandler } from '../../../../../net/raphimc/minecraftauth/playfab/responsehandler/PlayFabResponseHandler.d.ts'
export class PlayFabGetEntityTokenRequest extends PostRequest implements PlayFabResponseHandler<PlayFabEntityToken> {
    constructor(arg0: PlayFabEntityToken, arg1: string, arg2: string, arg3: string)
    handle(arg0: HttpResponse): PlayFabEntityToken;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): PlayFabEntityToken;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}