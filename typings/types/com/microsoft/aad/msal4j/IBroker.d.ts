import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { InteractiveRequestParameters } from '../../../../com/microsoft/aad/msal4j/InteractiveRequestParameters.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
import type { UserNamePasswordParameters } from '../../../../com/microsoft/aad/msal4j/UserNamePasswordParameters.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IBroker extends Object{
    acquireToken(arg0: PublicClientApplication, arg1: InteractiveRequestParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: PublicClientApplication, arg1: SilentParameters): CompletableFuture<IAuthenticationResult>;
    acquireToken(arg0: PublicClientApplication, arg1: UserNamePasswordParameters): CompletableFuture<IAuthenticationResult>;
    isBrokerAvailable(): boolean;
    parseBrokerAuthResult(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string, arg5: number, arg6: boolean): IAuthenticationResult;
    removeAccount(arg0: PublicClientApplication, arg1: IAccount): void;
}