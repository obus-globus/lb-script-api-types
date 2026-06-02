import type { SslCompletionEvent } from '../../../../io/netty/handler/ssl/SslCompletionEvent.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SniCompletionEvent extends SslCompletionEvent {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    // private hostname: string;
    hostname(): string;
    toString(): string;
}