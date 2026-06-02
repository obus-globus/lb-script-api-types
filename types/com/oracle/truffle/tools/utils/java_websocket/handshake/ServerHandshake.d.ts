import type { Handshakedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ServerHandshake extends Handshakedata, Object{
    getHttpStatus(): number;
    getHttpStatusMessage(): string;
}