import type { AadInstanceDiscoveryResponse } from '../../../../com/microsoft/aad/msal4j/AadInstanceDiscoveryResponse.d.ts'
import type { ErrorResponse } from '../../../../com/microsoft/aad/msal4j/ErrorResponse.d.ts'
import type { ManagedIdentitySourceType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentitySourceType.d.ts'
import type { MsalException } from '../../../../com/microsoft/aad/msal4j/MsalException.d.ts'
export class MsalServiceException extends MsalException {
    constructor(arg0: AadInstanceDiscoveryResponse)
    constructor(arg0: ErrorResponse, arg1: { [key: string]: string[] })
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: ManagedIdentitySourceType)
    // private claims: string;
    // private correlationId: string;
    // private headers: { [key: string]: string[] };
    // private managedIdentitySource: string;
    // private statusCode: number;
    // private statusMessage: string;
    // private subError: string;
    claims(): string;
    correlationId(): string;
    headers(): { [key: string]: string[] };
    managedIdentitySource(): string;
    statusCode(): number;
    statusMessage(): string;
    subError(): string;
}