import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { InspectorWSConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/InspectorWSConnection.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Token.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { WebSocketClient } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/client/WebSocketClient.d.ts'
import type { ServerHandshake } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshake.d.ts'
import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Exception } from '../../../../../../java/lang/Exception.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InspectWSClient extends WebSocketClient implements InspectorWSConnection {
    constructor(isa: InetSocketAddress, wsspath: string, executionContext: InspectorExecutionContext, debugBreak: boolean, connectionWatcher: ConnectionWatcher, info: PrintWriter)
    // private connectionWatcher: ConnectionWatcher;
    // private debugBreak: boolean;
    // private executionContext: InspectorExecutionContext;
    // private host: string;
    // private iss: InspectServerSession;
    readonly port: number;
    close(): void;
    close(token: Token): void;
    close(arg0: number): void;
    close(arg0: number, arg1: string): void;
    closing(token: Token): void;
    consoleAPICall(token: Token, type: string, text: Object): void;
    dispose(): void;
    getPort(): number;
    onClose(code: number, reason: string, remote: boolean): void;
    onError(excptn: Exception): void;
    onMessage(arg0: ByteBuffer): void;
    onMessage(message: string): void;
    onOpen(sh: ServerHandshake): void;
}