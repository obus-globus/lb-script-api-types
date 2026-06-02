import type { HandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/HandshakeBuilder.d.ts'
import type { ServerHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshake.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ServerHandshakeBuilder extends HandshakeBuilder, ServerHandshake, Object{
    setHttpStatus(arg0: number): void;
    setHttpStatusMessage(arg0: string): void;
}