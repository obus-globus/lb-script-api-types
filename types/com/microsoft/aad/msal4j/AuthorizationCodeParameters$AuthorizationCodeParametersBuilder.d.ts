import type { AuthorizationCodeParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthorizationCodeParameters$AuthorizationCodeParametersBuilder extends Object {
    constructor()
    // private authorizationCode: string;
    // private claims: ClaimsRequest;
    // private codeVerifier: string;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private redirectUri: URI;
    // private scopes: string[];
    // private tenant: string;
    authorizationCode(arg0: string): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    build(): AuthorizationCodeParameters;
    claims(arg0: ClaimsRequest): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    codeVerifier(arg0: string): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    extraHttpHeaders(arg0: { [key: string]: string }): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    extraQueryParameters(arg0: { [key: string]: string }): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    redirectUri(arg0: URI): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    scopes(arg0: string[]): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    tenant(arg0: string): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    toString(): string;
}