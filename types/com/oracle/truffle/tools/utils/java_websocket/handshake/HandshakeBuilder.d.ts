import type { Handshakedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface HandshakeBuilder extends Handshakedata, Object{
    put(arg0: string, arg1: string): void;
    setContent(arg0: number[]): void;
}