import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IAcquireTokenParameters extends Object{
    claims(): ClaimsRequest;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    scopes(): string[];
    tenant(): string;
}