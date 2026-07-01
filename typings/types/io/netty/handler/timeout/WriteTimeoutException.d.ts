import type { TimeoutException } from '../../../../io/netty/handler/timeout/TimeoutException.d.ts'
export class WriteTimeoutException extends TimeoutException {
    static INSTANCE: WriteTimeoutException;
    constructor()
    constructor(arg0: string)
}