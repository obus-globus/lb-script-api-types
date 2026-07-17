import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { ClientCredentialParameters$ClientCredentialParametersBuilder } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters$ClientCredentialParametersBuilder.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { IClientCredential } from '../../../../com/microsoft/aad/msal4j/IClientCredential.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientCredentialParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[]): ClientCredentialParameters$ClientCredentialParametersBuilder;
    private constructor(arg0: string[], arg1: boolean, arg2: ClaimsRequest, arg3: JavaMap<string, string>, arg4: JavaMap<string, string>, arg5: string, arg6: IClientCredential)
    // private claims: ClaimsRequest;
    // private clientCredential: IClientCredential;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private scopes: string[];
    // private skipCache: boolean;
    // private tenant: string;
    claims(): ClaimsRequest;
    clientCredential(): IClientCredential;
    extraHttpHeaders(): JavaMap<string, string>;
    extraQueryParameters(): JavaMap<string, string>;
    scopes(): string[];
    skipCache(): boolean;
    tenant(): string;
}