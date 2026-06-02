import type { AbstractManagedIdentitySource } from '../../../../com/microsoft/aad/msal4j/AbstractManagedIdentitySource.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { ManagedIdentityResponse } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityResponse.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
export class IMDSManagedIdentitySource extends AbstractManagedIdentitySource {
    constructor(arg0: MsalRequest, arg1: ServiceBundle)
    // private imdsEndpoint: URI;
    createManagedIdentityRequest(arg0: string): void;
    handleResponse(arg0: ManagedIdentityParameters, arg1: IHttpResponse): ManagedIdentityResponse;
}