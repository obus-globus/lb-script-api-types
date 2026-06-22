import type { ClientHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { HandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/HandshakeBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface ClientHandshakeBuilder extends ClientHandshake, HandshakeBuilder, Object{
    getFieldValue(arg0: string): string;
    getResourceDescriptor(): string;
    hasFieldValue(arg0: string): boolean;
    put(arg0: string, arg1: string): void;
    setResourceDescriptor(arg0: string): void;
}