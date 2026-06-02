import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { ClientCredentialRequest } from '../../../../com/microsoft/aad/msal4j/ClientCredentialRequest.d.ts'
import type { ConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication.d.ts'
export class AcquireTokenByClientCredentialSupplier extends AuthenticationResultSupplier {
    constructor(arg0: ConfidentialClientApplication, arg1: ClientCredentialRequest)
    // private clientCredentialRequest: ClientCredentialRequest;
    // private acquireTokenByClientCredential(): AuthenticationResult;
    execute(): AuthenticationResult;
}