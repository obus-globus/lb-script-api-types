import type { URI } from '../../../java/net/URI.d.ts'
import type { WebSocket } from '../../../java/net/http/WebSocket.d.ts'
import type { WebSocket$Listener } from '../../../java/net/http/WebSocket$Listener.d.ts'
import type { Duration } from '../../../java/time/Duration.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface WebSocket$Builder extends Object{
    buildAsync(arg0: URI, arg1: WebSocket$Listener): CompletableFuture<WebSocket>;
    connectTimeout(arg0: Duration): WebSocket$Builder;
    header(arg0: string, arg1: string): WebSocket$Builder;
    subprotocols(arg0: string, arg1: string[]): WebSocket$Builder;
}