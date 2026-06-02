import type { RealmsServiceException } from '../../../../com/mojang/realmsclient/exception/RealmsServiceException.d.ts'
export class RetryCallException extends RealmsServiceException {
    static DEFAULT_DELAY: number;
    constructor(delaySeconds: number, statusCode: number)
    delaySeconds: number;
}