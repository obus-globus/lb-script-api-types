import type { Handshakedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ServerHandshake extends Handshakedata, Object{
    getFieldValue(arg0: string): string;
    getHttpStatus(): number;
    getHttpStatusMessage(): string;
    hasFieldValue(arg0: string): boolean;
}