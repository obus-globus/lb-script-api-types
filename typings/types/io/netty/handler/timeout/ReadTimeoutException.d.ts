import type { TimeoutException } from '../../../../io/netty/handler/timeout/TimeoutException.d.ts'
export class ReadTimeoutException extends TimeoutException {
    static INSTANCE: ReadTimeoutException;
    constructor()
    constructor(arg0: string)
}