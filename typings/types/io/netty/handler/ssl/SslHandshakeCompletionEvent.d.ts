import type { SslCompletionEvent } from '../../../../io/netty/handler/ssl/SslCompletionEvent.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SslHandshakeCompletionEvent extends SslCompletionEvent {
    static SUCCESS: SslHandshakeCompletionEvent;
    private constructor()
    constructor(arg0: Throwable)
}