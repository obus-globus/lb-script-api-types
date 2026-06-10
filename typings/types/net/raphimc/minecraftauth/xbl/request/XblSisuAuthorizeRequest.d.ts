import type { KeyPair } from '../../../../../java/security/KeyPair.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { MsaApplicationConfig } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaToken } from '../../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { XblDeviceToken } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblDeviceToken.d.ts'
import type { XblSisuTokens } from '../../../../../net/raphimc/minecraftauth/xbl/model/XblSisuTokens.d.ts'
import type { SignedXblPostRequest } from '../../../../../net/raphimc/minecraftauth/xbl/request/SignedXblPostRequest.d.ts'
import type { XblResponseHandler } from '../../../../../net/raphimc/minecraftauth/xbl/responsehandler/XblResponseHandler.d.ts'
export class XblSisuAuthorizeRequest extends SignedXblPostRequest implements XblResponseHandler<XblSisuTokens> {
    constructor(arg0: MsaApplicationConfig, arg1: MsaToken, arg2: XblDeviceToken, arg3: KeyPair, arg4: string)
    handle(arg0: HttpResponse): XblSisuTokens;
    handle(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): XblSisuTokens;
    handleError(arg0: HttpResponse, arg1: Map$Entry<string, GsonElement>[]): void;
}