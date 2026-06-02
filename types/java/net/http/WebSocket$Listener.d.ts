import type { WebSocket } from '../../../java/net/http/WebSocket.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CompletionStage } from '../../../java/util/concurrent/CompletionStage.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface WebSocket$Listener extends Object{
    onBinary(arg0: WebSocket, arg1: ByteBuffer, arg2: boolean): CompletionStage<Object>;
    onClose(arg0: WebSocket, arg1: number, arg2: string): CompletionStage<Object>;
    onError(arg0: WebSocket, arg1: Throwable): void;
    onOpen(arg0: WebSocket): void;
    onPing(arg0: WebSocket, arg1: ByteBuffer): CompletionStage<Object>;
    onPong(arg0: WebSocket, arg1: ByteBuffer): CompletionStage<Object>;
    onText(arg0: WebSocket, arg1: CharSequence, arg2: boolean): CompletionStage<Object>;
}