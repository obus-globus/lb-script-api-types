import type { WebSocketImpl } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { Draft } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Draft_6455$TranslatedPayloadMetaData } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft_6455$TranslatedPayloadMetaData.d.ts'
import type { CloseHandshakeType } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/CloseHandshakeType.d.ts'
import type { HandshakeState } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/HandshakeState.d.ts'
import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { Role } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Role.d.ts'
import type { IExtension } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/extensions/IExtension.d.ts'
import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { ClientHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { ClientHandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshakeBuilder.d.ts'
import type { HandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/HandshakeBuilder.d.ts'
import type { ServerHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshake.d.ts'
import type { ServerHandshakeBuilder } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshakeBuilder.d.ts'
import type { IProtocol } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/protocols/IProtocol.d.ts'
import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { SecureRandom } from '../../../../../../../java/security/SecureRandom.d.ts'
import type { Logger } from '../../../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Draft_6455 extends Draft {
    static readLine(paramarg0: ByteBuffer): ByteBuffer;
    static readStringLine(paramarg0: ByteBuffer): string;
    static translateHandshakeHttp(paramarg0: ByteBuffer, paramarg1: Role): HandshakeBuilder;
    constructor()
    constructor(arg0: IExtension)
    constructor(arg0: IExtension[])
    constructor(arg0: IExtension[], arg1: number)
    constructor(arg0: IExtension[], arg1: IProtocol[])
    constructor(arg0: IExtension[], arg1: IProtocol[], arg2: number)
    // private byteBufferList: ByteBuffer[];
    // private currentContinuousFrame: Framedata;
    // private currentDecodingExtension: IExtension;
    // private defaultExtension: IExtension;
    // private incompleteframe: ByteBuffer;
    readonly knownExtensions: IExtension[];
    readonly knownProtocols: IProtocol[];
    // private log: Logger;
    readonly maxFrameSize: number;
    // private negotiatedExtension: IExtension;
    readonly protocol: IProtocol;
    // private reuseableRandom: SecureRandom;
    acceptHandshakeAsClient(arg0: ClientHandshake, arg1: ServerHandshake): HandshakeState;
    acceptHandshakeAsServer(arg0: ClientHandshake): HandshakeState;
    // private addToBufferList(arg0: ByteBuffer): void;
    // private checkBufferLimit(): void;
    // private clearBufferList(): void;
    // private containsRequestedProtocol(arg0: string): HandshakeState;
    copyInstance(): Draft;
    createBinaryFrame(arg0: Framedata): ByteBuffer;
    // private createByteBufferFromFramedata(arg0: Framedata): ByteBuffer;
    createFrames(arg0: ByteBuffer, arg1: boolean): Framedata[];
    createFrames(arg0: string, arg1: boolean): Framedata[];
    equals(arg0: Object | null): boolean;
    // private fromOpcode(arg0: Opcode): number;
    // private generateFinalKey(arg0: string): string;
    // private getByteBufferListSize(): number;
    getCloseHandshakeType(): CloseHandshakeType;
    getExtension(): IExtension;
    getKnownExtensions(): IExtension[];
    getKnownProtocols(): IProtocol[];
    // private getMaskByte(arg0: boolean): number;
    getMaxFrameSize(): number;
    // private getPayloadFromByteBufferList(): ByteBuffer;
    getProtocol(): IProtocol;
    // private getRSVByte(arg0: number): number;
    // private getServerTime(): string;
    // private getSizeBytes(arg0: ByteBuffer): number;
    hashCode(): number;
    // private logRuntimeException(arg0: WebSocketImpl, arg1: RuntimeException): void;
    postProcessHandshakeRequestAsClient(arg0: ClientHandshakeBuilder): ClientHandshakeBuilder;
    postProcessHandshakeResponseAsServer(arg0: ClientHandshake, arg1: ServerHandshakeBuilder): HandshakeBuilder;
    processFrame(arg0: WebSocketImpl, arg1: Framedata): void;
    // private processFrameBinary(arg0: WebSocketImpl, arg1: Framedata): void;
    // private processFrameClosing(arg0: WebSocketImpl, arg1: Framedata): void;
    // private processFrameContinuousAndNonFin(arg0: WebSocketImpl, arg1: Framedata, arg2: Opcode): void;
    // private processFrameIsFin(arg0: WebSocketImpl, arg1: Framedata): void;
    // private processFrameIsNotFin(arg0: Framedata): void;
    // private processFrameText(arg0: WebSocketImpl, arg1: Framedata): void;
    reset(): void;
    // private toByteArray(arg0: number, arg1: number): number[];
    // private toOpcode(arg0: number): Opcode;
    toString(): string;
    translateFrame(arg0: ByteBuffer): Framedata[];
    // private translateSingleFrame(arg0: ByteBuffer): Framedata;
    // private translateSingleFrameCheckLengthLimit(arg0: number): void;
    // private translateSingleFrameCheckPacketSize(arg0: number, arg1: number): void;
    // private translateSingleFramePayloadLength(arg0: ByteBuffer, arg1: Opcode, arg2: number, arg3: number, arg4: number): Draft_6455$TranslatedPayloadMetaData;
}