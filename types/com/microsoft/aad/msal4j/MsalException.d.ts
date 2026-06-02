import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class MsalException extends RuntimeException {
    constructor(arg0: string, arg1: string)
    constructor(arg0: Throwable)
    // private errorCode: string;
    errorCode(): string;
}