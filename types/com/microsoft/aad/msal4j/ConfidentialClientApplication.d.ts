import type { AbstractClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase.d.ts'
import type { AppTokenProviderParameters } from '../../../../com/microsoft/aad/msal4j/AppTokenProviderParameters.d.ts'
import type { ClientCredentialParameters } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters.d.ts'
import type { ConfidentialClientApplication$Builder } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication$Builder.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IClientCredential } from '../../../../com/microsoft/aad/msal4j/IClientCredential.d.ts'
import type { IConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/IConfidentialClientApplication.d.ts'
import type { OnBehalfOfParameters } from '../../../../com/microsoft/aad/msal4j/OnBehalfOfParameters.d.ts'
import type { TokenProviderResult } from '../../../../com/microsoft/aad/msal4j/TokenProviderResult.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
export class ConfidentialClientApplication extends AbstractClientApplicationBase implements IConfidentialClientApplication {
    static DEFAULT_AUTHORITY: string;
    static builder(paramarg0: string, paramarg1: IClientCredential): ConfidentialClientApplication$Builder;
    private constructor(arg0: ConfidentialClientApplication$Builder)
    appTokenProvider: (param0: AppTokenProviderParameters) => CompletableFuture<TokenProviderResult>;
    // private clientCredential: IClientCredential;
    // private sendX5c: boolean;
    acquireToken(arg0: ClientCredentialParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: OnBehalfOfParameters): CompletableFuture<IAuthenticationResult>;
    sendX5c(): boolean;
}