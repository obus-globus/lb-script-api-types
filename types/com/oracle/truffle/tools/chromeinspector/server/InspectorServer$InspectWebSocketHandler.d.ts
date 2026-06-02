import type { Token } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Token.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { WebSocket } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectorServer$InspectWebSocketHandler extends Object {
    constructor(null_: InspectorServer$InspectWebSocketHandler, token: Token, connection: WebSocket, iss: InspectServerSession, connectionWatcher: ConnectionWatcher)
    // private connection: WebSocket;
    // private connectionWatcher: ConnectionWatcher;
    // private iss: InspectServerSession;
    // private token: Token;
    didClose(): void;
    disposeSession(): void;
    // private init(): void;
    onException(exception: Exception): void;
    onMessage(message: string): void;
    onPing(): void;
    onPong(): void;
    onPreparePing(): void;
}