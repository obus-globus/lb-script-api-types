import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HttpMethod } from '../../../../com/microsoft/aad/msal4j/HttpMethod.d.ts'
import type { ManagedIdentityApplication } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityApplication.d.ts'
import type { ManagedIdentityIdType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityIdType.d.ts'
import type { ManagedIdentityParameters } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
export class ManagedIdentityRequest extends MsalRequest {
    constructor(arg0: ManagedIdentityApplication, arg1: RequestContext)
    // private baseEndpoint: URI;
    // private bodyParameters: JavaMap<string, string>;
    // private headers: JavaMap<string, string>;
    // private method: HttpMethod;
    // private queryParameters: JavaMap<string, string>;
    addTokenRevocationParametersToQuery(arg0: ManagedIdentityParameters): void;
    addUserAssignedIdToQuery(arg0: ManagedIdentityIdType, arg1: string): void;
    // private appendQueryParametersToBaseEndpoint(): string;
    computeURI(): URL;
    getBodyAsString(): string;
}