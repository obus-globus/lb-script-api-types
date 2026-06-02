import type { AppTokenProviderParameters } from '../../../../com/microsoft/aad/msal4j/AppTokenProviderParameters.d.ts'
import type { ClientCredentialParameters } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters.d.ts'
import type { ConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { TokenProviderResult } from '../../../../com/microsoft/aad/msal4j/TokenProviderResult.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
export class ClientCredentialRequest extends MsalRequest {
    constructor(arg0: ClientCredentialParameters, arg1: ConfidentialClientApplication, arg2: RequestContext, arg3: (param0: AppTokenProviderParameters) => CompletableFuture<TokenProviderResult>)
    // private appTokenProvider: (param0: AppTokenProviderParameters) => CompletableFuture<TokenProviderResult>;
    // private parameters: ClientCredentialParameters;
}