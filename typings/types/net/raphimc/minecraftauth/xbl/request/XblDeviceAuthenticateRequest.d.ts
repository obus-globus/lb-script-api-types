import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { XblDeviceToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblDeviceToken.d.ts'
import type { SignedXblPostRequest } from '../../../../../net/raphimc/minecraftauth/xbl/request/SignedXblPostRequest.d.ts'
import type { XblResponseHandler } from '../../../../../net/raphimc/minecraftauth/xbl/responsehandler/XblResponseHandler.d.ts'
export class XblDeviceAuthenticateRequest extends SignedXblPostRequest implements XblResponseHandler<XblDeviceToken> {
    constructor(arg0: string, arg1: UUID, arg2: KeyPair)
    handle(arg0: HttpResponse): XblDeviceToken;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): XblDeviceToken;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}