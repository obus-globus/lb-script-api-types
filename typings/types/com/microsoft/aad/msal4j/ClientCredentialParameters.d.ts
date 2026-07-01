import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { ClientCredentialParameters$ClientCredentialParametersBuilder } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters$ClientCredentialParametersBuilder.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { IClientCredential } from '../../../../com/microsoft/aad/msal4j/IClientCredential.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientCredentialParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[]): ClientCredentialParameters$ClientCredentialParametersBuilder;
    constructor(arg0: (Object | null)[], arg1: boolean, arg2: ClaimsRequest, arg3: Map<Object | null, Object | null>, arg4: Map<Object | null, Object | null>, arg5: string, arg6: IClientCredential, arg7: any)
    // private claims: ClaimsRequest;
    // private clientCredential: IClientCredential;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private scopes: string[];
    // private skipCache: boolean;
    // private tenant: string;
    claims(): ClaimsRequest;
    clientCredential(): IClientCredential;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    scopes(): string[];
    skipCache(): boolean;
    tenant(): string;
}