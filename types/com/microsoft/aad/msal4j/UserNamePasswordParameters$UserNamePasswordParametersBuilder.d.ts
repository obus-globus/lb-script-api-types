import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { HttpMethod } from '../../../../com/microsoft/aad/msal4j/HttpMethod.d.ts'
import type { PopParameters } from '../../../../com/microsoft/aad/msal4j/PopParameters.d.ts'
import type { UserNamePasswordParameters } from '../../../../com/microsoft/aad/msal4j/UserNamePasswordParameters.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UserNamePasswordParameters$UserNamePasswordParametersBuilder extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private password: string[];
    // private proofOfPossession: PopParameters;
    // private scopes: string[];
    // private tenant: string;
    // private username: string;
    build(): UserNamePasswordParameters;
    claims(arg0: ClaimsRequest): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    extraHttpHeaders(arg0: { [key: string]: string }): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    extraQueryParameters(arg0: { [key: string]: string }): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    password(arg0: string[]): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    proofOfPossession(arg0: HttpMethod, arg1: URI, arg2: string): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    scopes(arg0: string[]): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    tenant(arg0: string): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    toString(): string;
    username(arg0: string): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
}