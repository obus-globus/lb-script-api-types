import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { CacheRefreshReason } from '../../../../com/microsoft/aad/msal4j/CacheRefreshReason.d.ts'
import type { ManagedIdentityApplication } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityApplication.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { ManagedIdentityResponse } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityResponse.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { TokenRequestExecutor } from '../../../../com/microsoft/aad/msal4j/TokenRequestExecutor.d.ts'
export class AcquireTokenByManagedIdentitySupplier extends AuthenticationResultSupplier {
    constructor(arg0: ManagedIdentityApplication, arg1: MsalRequest)
    // private managedIdentityParameters: ManagedIdentityParameters;
    // private calculateRefreshOn(arg0: number): number;
    // private createFromManagedIdentityResponse(arg0: ManagedIdentityResponse): AuthenticationResult;
    execute(): AuthenticationResult;
    // private fetchNewAccessTokenAndSaveToCache(arg0: TokenRequestExecutor, arg1: CacheRefreshReason): AuthenticationResult;
}