import type { DeviceCodeFlowParameters } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { IClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/IClientApplicationBase.d.ts'
import type { IntegratedWindowsAuthenticationParameters } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters.d.ts'
import type { InteractiveRequestParameters } from '../../../../com/microsoft/aad/msal4j/InteractiveRequestParameters.d.ts'
import type { UserNamePasswordParameters } from '../../../../com/microsoft/aad/msal4j/UserNamePasswordParameters.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IPublicClientApplication extends IClientApplicationBase, Object{
    acquireToken(arg0: DeviceCodeFlowParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: IntegratedWindowsAuthenticationParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: InteractiveRequestParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: UserNamePasswordParameters): CompletableFuture<IAuthenticationResult>;
}