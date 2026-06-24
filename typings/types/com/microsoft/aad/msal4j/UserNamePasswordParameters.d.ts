import type { UserNamePasswordParameters$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { PopParameters } from '../../../../com/microsoft/aad/msal4j/PopParameters.d.ts'
import type { UserNamePasswordParameters$UserNamePasswordParametersBuilder } from '../../../../com/microsoft/aad/msal4j/UserNamePasswordParameters$UserNamePasswordParametersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UserNamePasswordParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: string, paramarg2: string[]): UserNamePasswordParameters$UserNamePasswordParametersBuilder;
    private constructor(arg0: string[], arg1: string, arg2: string[], arg3: ClaimsRequest, arg4: { [key: string]: string }, arg5: { [key: string]: string }, arg6: string, arg7: PopParameters)
    constructor(arg0: (Object | null)[], arg1: string, arg2: string[], arg3: ClaimsRequest, arg4: Map<Object | null, Object | null>, arg5: Map<Object | null, Object | null>, arg6: string, arg7: PopParameters, arg8: UserNamePasswordParameters$1)
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private password: string[];
    // private proofOfPossession: PopParameters;
    // private scopes: string[];
    // private tenant: string;
    // private username: string;
    claims(): ClaimsRequest;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    password(): string[];
    proofOfPossession(): PopParameters;
    scopes(): string[];
    tenant(): string;
    username(): string;
}