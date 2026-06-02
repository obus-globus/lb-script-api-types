import type { ClientHandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshakeBuilder.d.ts'
import type { HandshakedataImpl1 } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/HandshakedataImpl1.d.ts'
export class HandshakeImpl1Client extends HandshakedataImpl1 implements ClientHandshakeBuilder {
    constructor()
    readonly resourceDescriptor: string;
    getResourceDescriptor(): string;
    setResourceDescriptor(arg0: string): void;
}