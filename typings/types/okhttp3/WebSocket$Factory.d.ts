import type { Object } from '../java/lang/Object.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { WebSocket } from '../okhttp3/WebSocket.d.ts'
import type { WebSocketListener } from '../okhttp3/WebSocketListener.d.ts'
export interface WebSocket$Factory extends Object{
    newWebSocket(request: Request, listener: WebSocketListener): WebSocket;
}