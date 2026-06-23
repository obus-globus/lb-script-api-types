import type { AbstractManagedIdentitySource } from '../../../../com/microsoft/aad/msal4j/AbstractManagedIdentitySource.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { ManagedIdentityResponse } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityResponse.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
export class AzureArcManagedIdentitySource extends AbstractManagedIdentitySource {
    private constructor(arg0: URI, arg1: MsalRequest, arg2: ServiceBundle)
    // private MSI_ENDPOINT: URI;
    createManagedIdentityRequest(arg0: string): void;
    handleResponse(arg0: ManagedIdentityParameters, arg1: IHttpResponse): ManagedIdentityResponse;
    // private isValidLinuxPath(arg0: Path[]): boolean;
    // private isValidWindowsPath(arg0: Path[]): boolean;
    // private readChallengeFrom(arg0: IHttpResponse): Optional<string>;
    // private validateFile(arg0: Path[]): void;
}