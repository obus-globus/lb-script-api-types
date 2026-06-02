import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { ConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication.d.ts'
import type { OnBehalfOfRequest } from '../../../../com/microsoft/aad/msal4j/OnBehalfOfRequest.d.ts'
export class AcquireTokenByOnBehalfOfSupplier extends AuthenticationResultSupplier {
    constructor(arg0: ConfidentialClientApplication, arg1: OnBehalfOfRequest)
    // private onBehalfOfRequest: OnBehalfOfRequest;
    // private acquireTokenOnBehalfOf(): AuthenticationResult;
    execute(): AuthenticationResult;
}