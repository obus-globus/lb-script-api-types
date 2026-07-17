import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IAcquireTokenParameters extends Object{
    claims(): ClaimsRequest;
    extraHttpHeaders(): JavaMap<string, string>;
    extraQueryParameters(): JavaMap<string, string>;
    scopes(): string[];
    tenant(): string;
}