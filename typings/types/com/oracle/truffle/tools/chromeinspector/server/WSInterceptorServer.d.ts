import type { InspectorWSConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/InspectorWSConnection.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/tools/chromeinspector/instrument/Token.d.ts'
import type { ConnectionWatcher } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/ConnectionWatcher.d.ts'
import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MessageEndpoint } from '../../../../../../org/graalvm/polyglot/io/MessageEndpoint.d.ts'
export class WSInterceptorServer extends Object implements InspectorWSConnection, MessageEndpoint {
    constructor(port: number, token: Token, iss: InspectServerSession, connectionWatcher: ConnectionWatcher)
    // private connectionWatcher: ConnectionWatcher;
    // private inspectEndpoint: MessageEndpoint;
    // private iss: InspectServerSession;
    readonly port: number;
    // private token: Token;
    close(tokenToClose: Token): void;
    closing(token: Token): void;
    closing(tokenToClose: Token): void;
    consoleAPICall(tokenToCall: Token, type: string, text: Object): void;
    dispose(): void;
    dispose(): void;
    getPort(): number;
    newSession(newIss: InspectServerSession): void;
    opened(endpoint: MessageEndpoint): void;
    resetSessionEndpoint(): void;
    sendBinary(data: ByteBuffer): void;
    sendClose(): void;
    sendPing(data: ByteBuffer): void;
    sendPong(data: ByteBuffer): void;
    sendText(message: string): void;
}