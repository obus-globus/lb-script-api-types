import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MinecraftSession } from '../../../../../net/raphimc/minecraftauth/bedrock/model/MinecraftSession.d.ts'
import type { MinecraftServicesResponseHandler } from '../../../../../net/raphimc/minecraftauth/bedrock/responsehandler/MinecraftServicesResponseHandler.d.ts'
import type { PlayFabToken } from '../../../../../net/raphimc/minecraftauth/playfab/model/PlayFabToken.d.ts'
import type { XblXstsToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class MinecraftSessionStartRequest extends PostRequest implements MinecraftServicesResponseHandler<MinecraftSession> {
    constructor(arg0: PlayFabToken, arg1: string, arg2: UUID)
    constructor(arg0: XblXstsToken, arg1: PlayFabToken, arg2: string, arg3: UUID)
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MinecraftSession;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}