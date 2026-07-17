import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IUserAssertion } from '../../../../com/microsoft/aad/msal4j/IUserAssertion.d.ts'
import type { OnBehalfOfParameters } from '../../../../com/microsoft/aad/msal4j/OnBehalfOfParameters.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OnBehalfOfParameters$OnBehalfOfParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private scopes: string[];
    // private skipCache: boolean;
    // private tenant: string;
    // private userAssertion: IUserAssertion;
    build(): OnBehalfOfParameters;
    claims(arg0: ClaimsRequest): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
    extraHttpHeaders(arg0: JavaMap<string, string>): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
    extraQueryParameters(arg0: JavaMap<string, string>): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
    scopes(arg0: string[]): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
    skipCache(arg0: boolean): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
    tenant(arg0: string): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
    toString(): string;
    userAssertion(arg0: IUserAssertion): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
}