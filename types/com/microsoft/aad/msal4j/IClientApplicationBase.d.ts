import type { AuthorizationCodeParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters.d.ts'
import type { AuthorizationRequestUrlParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { IApplicationBase } from '../../../../com/microsoft/aad/msal4j/IApplicationBase.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { RefreshTokenParameters } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IClientApplicationBase extends IApplicationBase, Object{
    acquireToken(arg0: AuthorizationCodeParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: RefreshTokenParameters): CompletableFuture<IAuthenticationResult>;
    acquireTokenSilently(arg0: SilentParameters): CompletableFuture<IAuthenticationResult>;
    authority(): string;
    clientId(): string;
    getAccounts(): CompletableFuture<IAccount[]>;
    getAuthorizationRequestUrl(arg0: AuthorizationRequestUrlParameters): URL;
    removeAccount(arg0: IAccount): CompletableFuture<Object>;
    validateAuthority(): boolean;
}