import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { WebSocket } from '../okhttp3/WebSocket.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export abstract class WebSocketListener extends Object {
    constructor()
    onClosed(webSocket: WebSocket, code: number, reason: string): void;
    onClosing(webSocket: WebSocket, code: number, reason: string): void;
    onFailure(webSocket: WebSocket, t: Throwable, response: Response | null): void;
    onMessage(webSocket: WebSocket, text: string): void;
    onMessage(webSocket: WebSocket, bytes: ByteString): void;
    onOpen(webSocket: WebSocket, response: Response): void;
}