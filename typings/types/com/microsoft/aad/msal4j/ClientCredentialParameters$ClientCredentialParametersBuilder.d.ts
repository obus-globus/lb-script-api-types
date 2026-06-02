import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { ClientCredentialParameters } from '../../../../com/microsoft/aad/msal4j/ClientCredentialParameters.d.ts'
import type { IClientCredential } from '../../../../com/microsoft/aad/msal4j/IClientCredential.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ClientCredentialParameters$ClientCredentialParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private clientCredential: IClientCredential;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private scopes: string[];
    // private skipCache: boolean;
    // private tenant: string;
    build(): ClientCredentialParameters;
    claims(arg0: ClaimsRequest): ClientCredentialParameters$ClientCredentialParametersBuilder;
    clientCredential(arg0: IClientCredential): ClientCredentialParameters$ClientCredentialParametersBuilder;
    extraHttpHeaders(arg0: { [key: string]: string }): ClientCredentialParameters$ClientCredentialParametersBuilder;
    extraQueryParameters(arg0: { [key: string]: string }): ClientCredentialParameters$ClientCredentialParametersBuilder;
    scopes(arg0: string[]): ClientCredentialParameters$ClientCredentialParametersBuilder;
    skipCache(arg0: boolean): ClientCredentialParameters$ClientCredentialParametersBuilder;
    tenant(arg0: string): ClientCredentialParameters$ClientCredentialParametersBuilder;
    toString(): string;
}