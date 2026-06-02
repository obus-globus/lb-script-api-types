import type { AbstractManagedIdentitySource } from '../../../../com/microsoft/aad/msal4j/AbstractManagedIdentitySource.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { ManagedIdentityResponse } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityResponse.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ManagedIdentityClient extends Object {
    constructor(arg0: MsalRequest, arg1: ServiceBundle)
    // private managedIdentitySource: AbstractManagedIdentitySource;
    getManagedIdentityResponse(arg0: ManagedIdentityParameters): ManagedIdentityResponse;
}