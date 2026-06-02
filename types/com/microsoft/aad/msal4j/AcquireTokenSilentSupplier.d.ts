import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { CacheRefreshReason } from '../../../../com/microsoft/aad/msal4j/CacheRefreshReason.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
import type { SilentRequest } from '../../../../com/microsoft/aad/msal4j/SilentRequest.d.ts'
export class AcquireTokenSilentSupplier extends AuthenticationResultSupplier {
    constructor(arg0: AbstractApplicationBase, arg1: SilentRequest)
    // private silentRequest: SilentRequest;
    execute(): AuthenticationResult;
    // private makeRefreshRequest(arg0: AuthenticationResult, arg1: Authority, arg2: CacheRefreshReason): AuthenticationResult;
    // private setCacheTelemetry(arg0: CacheRefreshReason): void;
    // private shouldRefresh(arg0: SilentParameters, arg1: AuthenticationResult): boolean;
}