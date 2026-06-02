import type { WebSocket } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { WebSocketAdapter } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketAdapter.d.ts'
import type { Draft } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface WebSocketFactory extends Object{
    createWebSocket(arg0: WebSocketAdapter, arg1: Draft): WebSocket;
    createWebSocket(arg0: WebSocketAdapter, arg1: Draft[]): WebSocket;
}