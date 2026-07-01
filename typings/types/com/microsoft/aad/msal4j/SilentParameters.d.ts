import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { PopParameters } from '../../../../com/microsoft/aad/msal4j/PopParameters.d.ts'
import type { SilentParameters$SilentParametersBuilder } from '../../../../com/microsoft/aad/msal4j/SilentParameters$SilentParametersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SilentParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[]): SilentParameters$SilentParametersBuilder;
    static builder(paramarg0: string[], paramarg1: IAccount): SilentParameters$SilentParametersBuilder;
    constructor(arg0: (Object | null)[], arg1: IAccount, arg2: ClaimsRequest, arg3: string, arg4: boolean, arg5: Map<Object | null, Object | null>, arg6: Map<Object | null, Object | null>, arg7: string, arg8: PopParameters, arg9: any)
    // private account: IAccount;
    // private authorityUrl: string;
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private forceRefresh: boolean;
    // private proofOfPossession: PopParameters;
    // private scopes: string[];
    // private tenant: string;
    account(): IAccount;
    authorityUrl(): string;
    claims(): ClaimsRequest;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    forceRefresh(): boolean;
    proofOfPossession(): PopParameters;
    scopes(): string[];
    tenant(): string;
}