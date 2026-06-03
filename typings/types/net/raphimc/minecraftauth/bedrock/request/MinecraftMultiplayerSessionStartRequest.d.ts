import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MinecraftMultiplayerToken } from '../../../../../net/raphimc/minecraftauth/bedrock/model/MinecraftMultiplayerToken.d.ts'
import type { MinecraftSession } from '../../../../../net/raphimc/minecraftauth/bedrock/model/MinecraftSession.d.ts'
import type { MinecraftServicesResponseHandler } from '../../../../../net/raphimc/minecraftauth/bedrock/responsehandler/MinecraftServicesResponseHandler.d.ts'
export class MinecraftMultiplayerSessionStartRequest extends PostRequest implements MinecraftServicesResponseHandler<MinecraftMultiplayerToken> {
    constructor(arg0: MinecraftSession, arg1: KeyPair)
    handle(arg0: HttpResponse): MinecraftMultiplayerToken;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MinecraftMultiplayerToken;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}