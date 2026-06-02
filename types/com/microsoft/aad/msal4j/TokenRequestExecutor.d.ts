import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { ConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication.d.ts'
import type { HttpResponse } from '../../../../com/microsoft/aad/msal4j/HttpResponse.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { OAuthHttpRequest } from '../../../../com/microsoft/aad/msal4j/OAuthHttpRequest.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class TokenRequestExecutor extends Object {
    constructor(arg0: Authority, arg1: MsalRequest, arg2: ServiceBundle)
    // private log: Logger;
    // private msalRequest: MsalRequest;
    // private requestAuthority: Authority;
    // private serviceBundle: ServiceBundle;
    // private tenant: string;
    // private addCredentialToRequest(arg0: { [key: string]: string }, arg1: ConfidentialClientApplication): void;
    // private addJWTBearerAssertionParams(arg0: { [key: string]: string }, arg1: string): void;
    // private addQueryParameters(arg0: OAuthHttpRequest): void;
    // private createAuthenticationResultFromOauthHttpResponse(arg0: HttpResponse): AuthenticationResult;
    createOauthHttpRequest(): OAuthHttpRequest;
    executeTokenRequest(): AuthenticationResult;
    getLog(): Logger;
    getMsalRequest(): MsalRequest;
    getRequestAuthority(): Authority;
    getServiceBundle(): ServiceBundle;
    getTenant(): string;
}