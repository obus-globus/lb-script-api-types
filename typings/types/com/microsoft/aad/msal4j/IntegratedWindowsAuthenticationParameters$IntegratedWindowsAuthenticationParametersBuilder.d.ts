import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IntegratedWindowsAuthenticationParameters } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private scopes: string[];
    // private tenant: string;
    // private username: string;
    build(): IntegratedWindowsAuthenticationParameters;
    claims(arg0: ClaimsRequest): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    extraHttpHeaders(arg0: { [key: string]: string }): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    extraQueryParameters(arg0: { [key: string]: string }): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    scopes(arg0: string[]): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    tenant(arg0: string): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    toString(): string;
    username(arg0: string): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
}