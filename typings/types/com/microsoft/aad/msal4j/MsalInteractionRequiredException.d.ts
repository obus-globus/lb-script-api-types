import type { ErrorResponse } from '../../../../com/microsoft/aad/msal4j/ErrorResponse.d.ts'
import type { InteractionRequiredExceptionReason } from '../../../../com/microsoft/aad/msal4j/InteractionRequiredExceptionReason.d.ts'
import type { MsalServiceException } from '../../../../com/microsoft/aad/msal4j/MsalServiceException.d.ts'
export class MsalInteractionRequiredException extends MsalServiceException {
    constructor(arg0: ErrorResponse, arg1: { [key: string]: string[] })
    // private reason: InteractionRequiredExceptionReason;
    reason(): InteractionRequiredExceptionReason;
}