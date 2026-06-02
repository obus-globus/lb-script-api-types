import type { AbstractManagedIdentitySource } from '../../../../com/microsoft/aad/msal4j/AbstractManagedIdentitySource.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
export class AppServiceManagedIdentitySource extends AbstractManagedIdentitySource {
    private constructor(arg0: MsalRequest, arg1: ServiceBundle, arg2: URI, arg3: string)
    // private identityHeader: string;
    // private msiEndpoint: URI;
    createManagedIdentityRequest(arg0: string): void;
}