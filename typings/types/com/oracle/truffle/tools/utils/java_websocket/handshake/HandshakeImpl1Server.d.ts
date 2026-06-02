import type { HandshakedataImpl1 } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/HandshakedataImpl1.d.ts'
import type { ServerHandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshakeBuilder.d.ts'
export class HandshakeImpl1Server extends HandshakedataImpl1 implements ServerHandshakeBuilder {
    constructor()
    // private httpstatus: number;
    // private httpstatusmessage: string;
    getHttpStatus(): number;
    getHttpStatusMessage(): string;
    setHttpStatus(arg0: number): void;
    setHttpStatusMessage(arg0: string): void;
}