import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { RefreshTokenParameters$RefreshTokenParametersBuilder } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters$RefreshTokenParametersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RefreshTokenParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: string): RefreshTokenParameters$RefreshTokenParametersBuilder;
    private constructor(arg0: string[], arg1: string, arg2: ClaimsRequest, arg3: JavaMap<string, string>, arg4: JavaMap<string, string>, arg5: string)
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private refreshToken: string;
    // private scopes: string[];
    // private tenant: string;
    claims(): ClaimsRequest;
    extraHttpHeaders(): JavaMap<string, string>;
    extraQueryParameters(): JavaMap<string, string>;
    refreshToken(): string;
    scopes(): string[];
    tenant(): string;
}