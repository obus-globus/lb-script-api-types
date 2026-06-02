import type { WebSocketImpl } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { CloseHandshakeType } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/CloseHandshakeType.d.ts'
import type { HandshakeState } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/HandshakeState.d.ts'
import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { Role } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Role.d.ts'
import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { ClientHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { ClientHandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshakeBuilder.d.ts'
import type { HandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/HandshakeBuilder.d.ts'
import type { Handshakedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { ServerHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshake.d.ts'
import type { ServerHandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshakeBuilder.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Draft extends Object {
    static readLine(paramarg0: ByteBuffer): ByteBuffer;
    static readStringLine(paramarg0: ByteBuffer): string;
    static translateHandshakeHttp(paramarg0: ByteBuffer, paramarg1: Role): HandshakeBuilder;
    constructor()
    // private continuousFrameType: Opcode;
    role: Role;
    acceptHandshakeAsClient(arg0: ClientHandshake, arg1: ServerHandshake): HandshakeState;
    acceptHandshakeAsServer(arg0: ClientHandshake): HandshakeState;
    basicAccept(arg0: Handshakedata): boolean;
    checkAlloc(arg0: number): number;
    continuousFrame(arg0: Opcode, arg1: ByteBuffer, arg2: boolean): Framedata[];
    copyInstance(): Draft;
    createBinaryFrame(arg0: Framedata): ByteBuffer;
    createFrames(arg0: ByteBuffer, arg1: boolean): Framedata[];
    createFrames(arg0: string, arg1: boolean): Framedata[];
    createHandshake(arg0: Handshakedata): ByteBuffer[];
    createHandshake(arg0: Handshakedata, arg1: Role): ByteBuffer[];
    createHandshake(arg0: Handshakedata, arg1: Role, arg2: boolean): ByteBuffer[];
    createHandshake(arg0: Handshakedata, arg1: boolean): ByteBuffer[];
    getCloseHandshakeType(): CloseHandshakeType;
    getRole(): Role;
    postProcessHandshakeRequestAsClient(arg0: ClientHandshakeBuilder): ClientHandshakeBuilder;
    postProcessHandshakeResponseAsServer(arg0: ClientHandshake, arg1: ServerHandshakeBuilder): HandshakeBuilder;
    processFrame(arg0: WebSocketImpl, arg1: Framedata): void;
    readVersion(arg0: Handshakedata): number;
    reset(): void;
    setParseMode(arg0: Role): void;
    toString(): string;
    translateFrame(arg0: ByteBuffer): Framedata[];
    translateHandshake(arg0: ByteBuffer): Handshakedata;
}