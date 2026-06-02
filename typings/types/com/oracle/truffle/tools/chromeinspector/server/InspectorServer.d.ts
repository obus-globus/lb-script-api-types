import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { InspectorWSConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/InspectorWSConnection.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Token.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { InspectorServer$InspectWebSocketHandler } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer$InspectWebSocketHandler.d.ts'
import type { InspectorServer$ServerPathSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServer$ServerPathSession.d.ts'
import type { WebSocket } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { Framedata } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { PingFrame } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/PingFrame.d.ts'
import type { ClientHandshake } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { WebSocketServer } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/server/WebSocketServer.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { CountDownLatch } from '../../../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer extends WebSocketServer implements InspectorWSConnection {
    static get(paramisa: InetSocketAddress, paramtoken: Token, parampathContainingToken: string, paramcontext: InspectorExecutionContext, paramdebugBrk: boolean, paramconnectionWatcher: ConnectionWatcher, paraminitialSession: InspectServerSession): InspectorServer;
    private constructor(isa: InetSocketAddress)
    // private sessions: Map<Token, InspectorServer$ServerPathSession>;
    // private socketConnectionHandlers: Map<WebSocket, InspectorServer$InspectWebSocketHandler>;
    // private started: CountDownLatch;
    close(token: Token): void;
    closing(token: Token): void;
    consoleAPICall(token: Token, type: string, text: Object): void;
    dispose(): void;
    // private doClose(token: Token): void;
    getDevtoolsAddress(token: Token): string;
    getWSAddress(token: Token): string;
    // private getWSAddress(serverSession: InspectorServer$ServerPathSession): string;
    onClose(conn: WebSocket, code: number, reason: string, remote: boolean): void;
    onError(conn: WebSocket, ex: Exception): void;
    onMessage(conn: WebSocket, message: string): void;
    onOpen(conn: WebSocket, handshake: ClientHandshake): void;
    onPreparePing(conn: WebSocket): PingFrame;
    onStart(): void;
    onWebsocketPing(conn: WebSocket, f: Framedata): void;
    onWebsocketPong(conn: WebSocket, f: Framedata): void;
    stop(): void;
}