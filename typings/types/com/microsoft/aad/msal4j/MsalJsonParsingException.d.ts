import type { ManagedIdentitySourceType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentitySourceType.d.ts'
import type { MsalServiceException } from '../../../../com/microsoft/aad/msal4j/MsalServiceException.d.ts'
export class MsalJsonParsingException extends MsalServiceException {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: ManagedIdentitySourceType)
}