import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class DdemlUtil$DdemlException extends RuntimeException {
    static create(paramarg0: number): DdemlUtil$DdemlException;
    constructor(arg0: number, arg1: string)
    readonly errorCode: number;
    getErrorCode(): number;
}