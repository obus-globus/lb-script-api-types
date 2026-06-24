import type { PublicClientApplication$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase.d.ts'
import type { AuthorizationCodeParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters.d.ts'
import type { DeviceCodeFlowParameters } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IBroker } from '../../../../com/microsoft/aad/msal4j/IBroker.d.ts'
import type { IPublicClientApplication } from '../../../../com/microsoft/aad/msal4j/IPublicClientApplication.d.ts'
import type { IntegratedWindowsAuthenticationParameters } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters.d.ts'
import type { InteractiveRequestParameters } from '../../../../com/microsoft/aad/msal4j/InteractiveRequestParameters.d.ts'
import type { PublicClientApplication$Builder } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication$Builder.d.ts'
import type { RefreshTokenParameters } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
import type { UserNamePasswordParameters } from '../../../../com/microsoft/aad/msal4j/UserNamePasswordParameters.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
export class PublicClientApplication extends AbstractClientApplicationBase implements IPublicClientApplication {
    static DEFAULT_AUTHORITY: string;
    static builder(paramarg0: string): PublicClientApplication$Builder;
    private constructor(arg0: PublicClientApplication$Builder)
    constructor(arg0: PublicClientApplication$Builder, arg1: PublicClientApplication$1)
    // private broker: IBroker;
    // private brokerEnabled: boolean;
    acquireToken(arg0: AuthorizationCodeParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: DeviceCodeFlowParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: IntegratedWindowsAuthenticationParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: InteractiveRequestParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: RefreshTokenParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: UserNamePasswordParameters): CompletableFuture<IAuthenticationResult>;
    acquireTokenSilently(arg0: SilentParameters): CompletableFuture<IAuthenticationResult>;
    removeAccount(arg0: IAccount): CompletableFuture<void>;
    // private validateBrokerUsage(arg0: InteractiveRequestParameters): boolean;
    // private validateBrokerUsage(arg0: SilentParameters): boolean;
    // private validateBrokerUsage(arg0: UserNamePasswordParameters): boolean;
}