import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface WebSocket extends Object{
    abort(): void;
    getSubprotocol(): string;
    isInputClosed(): boolean;
    isOutputClosed(): boolean;
    request(arg0: number): void;
    sendBinary(arg0: ByteBuffer, arg1: boolean): CompletableFuture<WebSocket>;
    sendClose(arg0: number, arg1: string): CompletableFuture<WebSocket>;
    sendPing(arg0: ByteBuffer): CompletableFuture<WebSocket>;
    sendPong(arg0: ByteBuffer): CompletableFuture<WebSocket>;
    sendText(arg0: CharSequence, arg1: boolean): CompletableFuture<WebSocket>;
}