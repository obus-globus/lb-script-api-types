import type { CookieManager } from '../../../../../../java/net/CookieManager.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
import type { HttpClient } from '../../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { HttpRequest } from '../../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
import type { PostRequest } from '../../../../../../net/lenni0451/commons/httpclient/requests/impl/PostRequest.d.ts'
import type { MsaApplicationConfig } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaApplicationConfig.d.ts'
import type { MsaCredentials } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaCredentials.d.ts'
import type { MsaToken } from '../../../../../../net/raphimc/minecraftauth/msa/model/MsaToken.d.ts'
import type { MsaAuthService } from '../../../../../../net/raphimc/minecraftauth/msa/service/MsaAuthService.d.ts'
export class CredentialsMsaAuthService extends MsaAuthService {
    constructor(arg0: HttpClient, arg1: MsaApplicationConfig, arg2: MsaCredentials)
    // private credentials: MsaCredentials;
    acquireToken(): MsaToken;
    acquireToken(arg0: MsaCredentials): MsaToken;
    // private extractConfig(arg0: string): Map$Entry<string, GsonElement>[];
    // private prepareLoginRequest(arg0: MsaCredentials, arg1: CookieManager): PostRequest;
    // private sendLoginRequest(arg0: HttpRequest): HttpResponse;
}