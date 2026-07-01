import type { SslCompletionEvent } from '../../../../io/netty/handler/ssl/SslCompletionEvent.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SslCloseCompletionEvent extends SslCompletionEvent {
    static SUCCESS: SslCloseCompletionEvent;
    constructor(arg0: Throwable)
}