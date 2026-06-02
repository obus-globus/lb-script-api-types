import type { MsalException } from '../../../../com/microsoft/aad/msal4j/MsalException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class MsalClientException extends MsalException {
    constructor(arg0: string, arg1: string)
    constructor(arg0: Throwable)
}