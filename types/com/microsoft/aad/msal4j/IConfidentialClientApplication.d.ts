import type { ClientCredentialParameters } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/IClientApplicationBase.d.ts'
import type { OnBehalfOfParameters } from '../../../../com/microsoft/aad/msal4j/OnBehalfOfParameters.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IConfidentialClientApplication extends IClientApplicationBase, Object{
    acquireToken(arg0: ClientCredentialParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: OnBehalfOfParameters): CompletableFuture<IAuthenticationResult>;
    sendX5c(): boolean;
}