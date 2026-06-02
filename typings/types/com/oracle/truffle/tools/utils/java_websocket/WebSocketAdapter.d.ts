import type { WebSocket } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { WebSocketListener } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketListener.d.ts'
import type { Draft } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Framedata } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { PingFrame } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/PingFrame.d.ts'
import type { ClientHandshake } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { ServerHandshake } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshake.d.ts'
import type { ServerHandshakeBuilder } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshakeBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WebSocketAdapter extends Object implements WebSocketListener {
    constructor()
    // private pingFrame: PingFrame;
    onPreparePing(arg0: WebSocket): PingFrame;
    onWebsocketHandshakeReceivedAsClient(arg0: WebSocket, arg1: ClientHandshake, arg2: ServerHandshake): void;
    onWebsocketHandshakeReceivedAsServer(arg0: WebSocket, arg1: Draft, arg2: ClientHandshake): ServerHandshakeBuilder;
    onWebsocketHandshakeSentAsClient(arg0: WebSocket, arg1: ClientHandshake): void;
    onWebsocketPing(arg0: WebSocket, arg1: Framedata): void;
    onWebsocketPong(arg0: WebSocket, arg1: Framedata): void;
}