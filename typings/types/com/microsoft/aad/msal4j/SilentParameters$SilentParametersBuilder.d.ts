import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { HttpMethod } from '../../../../com/microsoft/aad/msal4j/HttpMethod.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { PopParameters } from '../../../../com/microsoft/aad/msal4j/PopParameters.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SilentParameters$SilentParametersBuilder extends Object {
    constructor()
    // private account: IAccount;
    // private authorityUrl: string;
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private forceRefresh: boolean;
    // private proofOfPossession: PopParameters;
    // private scopes: string[];
    // private tenant: string;
    account(arg0: IAccount): SilentParameters$SilentParametersBuilder;
    authorityUrl(arg0: string): SilentParameters$SilentParametersBuilder;
    build(): SilentParameters;
    claims(arg0: ClaimsRequest): SilentParameters$SilentParametersBuilder;
    extraHttpHeaders(arg0: JavaMap<string, string>): SilentParameters$SilentParametersBuilder;
    extraQueryParameters(arg0: JavaMap<string, string>): SilentParameters$SilentParametersBuilder;
    forceRefresh(arg0: boolean): SilentParameters$SilentParametersBuilder;
    proofOfPossession(arg0: HttpMethod, arg1: URI, arg2: string): SilentParameters$SilentParametersBuilder;
    scopes(arg0: string[]): SilentParameters$SilentParametersBuilder;
    tenant(arg0: string): SilentParameters$SilentParametersBuilder;
    toString(): string;
}