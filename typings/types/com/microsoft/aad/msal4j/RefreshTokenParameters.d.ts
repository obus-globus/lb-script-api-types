import type { RefreshTokenParameters$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { RefreshTokenParameters$RefreshTokenParametersBuilder } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters$RefreshTokenParametersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RefreshTokenParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: string): RefreshTokenParameters$RefreshTokenParametersBuilder;
    private constructor(arg0: string[], arg1: string, arg2: ClaimsRequest, arg3: { [key: string]: string }, arg4: { [key: string]: string }, arg5: string)
    constructor(arg0: (Object | null)[], arg1: string, arg2: ClaimsRequest, arg3: Map<Object | null, Object | null>, arg4: Map<Object | null, Object | null>, arg5: string, arg6: RefreshTokenParameters$1)
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private refreshToken: string;
    // private scopes: string[];
    // private tenant: string;
    claims(): ClaimsRequest;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    refreshToken(): string;
    scopes(): string[];
    tenant(): string;
}