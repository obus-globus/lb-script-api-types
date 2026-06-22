import type { WebSocket } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { WebSocketListener } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketListener.d.ts'
import type { Draft } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Framedata } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { PingFrame } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/PingFrame.d.ts'
import type { ClientHandshake } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { Handshakedata } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { ServerHandshake } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshake.d.ts'
import type { ServerHandshakeBuilder } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshakeBuilder.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WebSocketAdapter extends Object implements WebSocketListener {
    constructor()
    // private pingFrame: PingFrame;
    getLocalSocketAddress(arg0: WebSocket): InetSocketAddress;
    getRemoteSocketAddress(arg0: WebSocket): InetSocketAddress;
    onPreparePing(arg0: WebSocket): PingFrame;
    onWebsocketClose(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onWebsocketCloseInitiated(arg0: WebSocket, arg1: number, arg2: string): void;
    onWebsocketClosing(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onWebsocketError(arg0: WebSocket, arg1: Exception): void;
    onWebsocketHandshakeReceivedAsClient(arg0: WebSocket, arg1: ClientHandshake, arg2: ServerHandshake): void;
    onWebsocketHandshakeReceivedAsServer(arg0: WebSocket, arg1: Draft, arg2: ClientHandshake): ServerHandshakeBuilder;
    onWebsocketHandshakeSentAsClient(arg0: WebSocket, arg1: ClientHandshake): void;
    onWebsocketMessage(arg0: WebSocket, arg1: ByteBuffer): void;
    onWebsocketMessage(arg0: WebSocket, arg1: string): void;
    onWebsocketOpen(arg0: WebSocket, arg1: Handshakedata): void;
    onWebsocketPing(arg0: WebSocket, arg1: Framedata): void;
    onWebsocketPong(arg0: WebSocket, arg1: Framedata): void;
    onWriteDemand(arg0: WebSocket): void;
}