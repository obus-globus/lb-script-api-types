import type { AadInstanceDiscoveryResponse } from '../../../../com/microsoft/aad/msal4j/AadInstanceDiscoveryResponse.d.ts'
import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { AbstractClientApplicationBase$Builder } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase$Builder.d.ts'
import type { AuthorizationCodeParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters.d.ts'
import type { AuthorizationRequestUrlParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/IClientApplicationBase.d.ts'
import type { RefreshTokenParameters } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
import type { TokenCache } from '../../../../com/microsoft/aad/msal4j/TokenCache.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
export abstract class AbstractClientApplicationBase extends AbstractApplicationBase implements IClientApplicationBase {
    static DEFAULT_AUTHORITY: string;
    constructor(arg0: AbstractClientApplicationBase$Builder<any>)
    // private aadAadInstanceDiscoveryResponse: AadInstanceDiscoveryResponse;
    // private applicationName: string;
    // private applicationVersion: string;
    // private authority: string;
    // private autoDetectRegion: boolean;
    // private azureRegion: string;
    // private clientCapabilities: string;
    // private clientId: string;
    // private instanceDiscovery: boolean;
    // private validateAuthority: boolean;
    aadAadInstanceDiscoveryResponse(): AadInstanceDiscoveryResponse;
    acquireToken(arg0: AuthorizationCodeParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: RefreshTokenParameters): CompletableFuture<IAuthenticationResult>;
    acquireTokenSilently(arg0: SilentParameters): CompletableFuture<IAuthenticationResult>;
    applicationName(): string;
    applicationVersion(): string;
    authority(): string;
    autoDetectRegion(): boolean;
    azureRegion(): string;
    clientCapabilities(): string;
    clientId(): string;
    getAccounts(): CompletableFuture<IAccount[]>;
    getAuthorizationRequestUrl(arg0: AuthorizationRequestUrlParameters): URL;
    instanceDiscovery(): boolean;
    removeAccount(arg0: IAccount): CompletableFuture<void>;
    tokenCache(): TokenCache;
    validateAuthority(): boolean;
}