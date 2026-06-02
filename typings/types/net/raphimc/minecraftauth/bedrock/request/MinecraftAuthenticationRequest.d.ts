import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { PostRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MinecraftCertificateChain } from '../../../../../net/raphimc/minecraftauth/bedrock/model/MinecraftCertificateChain.d.ts'
import type { MinecraftResponseHandler } from '../../../../../net/raphimc/minecraftauth/bedrock/responsehandler/MinecraftResponseHandler.d.ts'
import type { XblXstsToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblXstsToken.d.ts'
export class MinecraftAuthenticationRequest extends PostRequest implements MinecraftResponseHandler<MinecraftCertificateChain> {
    constructor(arg0: XblXstsToken, arg1: KeyPair)
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): MinecraftCertificateChain;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}