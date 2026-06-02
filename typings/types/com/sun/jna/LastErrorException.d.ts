import type { RuntimeException } from '../../../java/lang/RuntimeException.d.ts'
export class LastErrorException extends RuntimeException {
    constructor(arg0: number)
    constructor(arg0: number, arg1: string)
    constructor(arg0: string)
    readonly errorCode: number;
    getErrorCode(): number;
}