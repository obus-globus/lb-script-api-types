import type { AbstractClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase.d.ts'
import type { AppTokenProviderParameters } from '../../../../com/microsoft/aad/msal4j/AppTokenProviderParameters.d.ts'
import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { ClientCredentialRequest } from '../../../../com/microsoft/aad/msal4j/ClientCredentialRequest.d.ts'
export class AcquireTokenByAppProviderSupplier extends AuthenticationResultSupplier {
    constructor(arg0: AbstractClientApplicationBase, arg1: ClientCredentialRequest, arg2: AppTokenProviderParameters)
    // private appTokenProviderParameters: AppTokenProviderParameters;
    // private clientCredentialRequest: ClientCredentialRequest;
    execute(): AuthenticationResult;
    fetchTokenUsingAppTokenProvider(arg0: AppTokenProviderParameters): AuthenticationResult;
}