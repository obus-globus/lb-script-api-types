import type { IApplicationBase } from '../../../../com/microsoft/aad/msal4j/IApplicationBase.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IManagedIdentityApplication extends IApplicationBase, Object{
    acquireTokenForManagedIdentity(arg0: ManagedIdentityParameters): CompletableFuture<IAuthenticationResult>;
}