import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { IUserAssertion } from '../../../../com/microsoft/aad/msal4j/IUserAssertion.d.ts'
import type { OnBehalfOfParameters$OnBehalfOfParametersBuilder } from '../../../../com/microsoft/aad/msal4j/OnBehalfOfParameters$OnBehalfOfParametersBuilder.d.ts'
import type { UserAssertion } from '../../../../com/microsoft/aad/msal4j/UserAssertion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OnBehalfOfParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: UserAssertion): OnBehalfOfParameters$OnBehalfOfParametersBuilder;
    constructor(arg0: (Object | null)[], arg1: boolean, arg2: IUserAssertion, arg3: ClaimsRequest, arg4: Map<Object | null, Object | null>, arg5: Map<Object | null, Object | null>, arg6: string, arg7: any)
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private scopes: string[];
    // private skipCache: boolean;
    // private tenant: string;
    // private userAssertion: IUserAssertion;
    claims(): ClaimsRequest;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    scopes(): string[];
    skipCache(): boolean;
    tenant(): string;
    userAssertion(): IUserAssertion;
}