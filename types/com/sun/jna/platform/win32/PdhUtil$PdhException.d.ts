import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class PdhUtil$PdhException extends RuntimeException {
    constructor(arg0: number)
    readonly errorCode: number;
    getErrorCode(): number;
}