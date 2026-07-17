import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IntegratedWindowsAuthenticationParameters } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private scopes: string[];
    // private tenant: string;
    // private username: string;
    build(): IntegratedWindowsAuthenticationParameters;
    claims(arg0: ClaimsRequest): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    extraHttpHeaders(arg0: JavaMap<string, string>): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    extraQueryParameters(arg0: JavaMap<string, string>): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    scopes(arg0: string[]): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    tenant(arg0: string): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    toString(): string;
    username(arg0: string): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
}