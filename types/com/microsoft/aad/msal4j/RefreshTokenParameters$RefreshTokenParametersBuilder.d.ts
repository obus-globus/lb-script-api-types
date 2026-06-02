import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { RefreshTokenParameters } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RefreshTokenParameters$RefreshTokenParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private refreshToken: string;
    // private scopes: string[];
    // private tenant: string;
    build(): RefreshTokenParameters;
    claims(arg0: ClaimsRequest): RefreshTokenParameters$RefreshTokenParametersBuilder;
    extraHttpHeaders(arg0: { [key: string]: string }): RefreshTokenParameters$RefreshTokenParametersBuilder;
    extraQueryParameters(arg0: { [key: string]: string }): RefreshTokenParameters$RefreshTokenParametersBuilder;
    refreshToken(arg0: string): RefreshTokenParameters$RefreshTokenParametersBuilder;
    scopes(arg0: string[]): RefreshTokenParameters$RefreshTokenParametersBuilder;
    tenant(arg0: string): RefreshTokenParameters$RefreshTokenParametersBuilder;
    toString(): string;
}