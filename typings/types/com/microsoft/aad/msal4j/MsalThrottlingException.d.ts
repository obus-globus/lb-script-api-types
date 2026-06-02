import type { MsalServiceException } from '../../../../com/microsoft/aad/msal4j/MsalServiceException.d.ts'
export class MsalThrottlingException extends MsalServiceException {
    constructor(arg0: number)
    // private retryInMs: number;
    retryInMs(): number;
}