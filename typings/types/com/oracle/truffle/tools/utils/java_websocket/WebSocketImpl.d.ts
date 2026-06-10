import type { WebSocket } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { WebSocketListener } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketListener.d.ts'
import type { Draft } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Opcode } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { ReadyState } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/ReadyState.d.ts'
import type { Role } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Role.d.ts'
import type { InvalidDataException } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/exceptions/InvalidDataException.d.ts'
import type { Framedata } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { ClientHandshake } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { ClientHandshakeBuilder } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshakeBuilder.d.ts'
import type { Handshakedata } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { IProtocol } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/protocols/IProtocol.d.ts'
import type { WebSocketServer$WebSocketWorker } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/server/WebSocketServer$WebSocketWorker.d.ts'
import type { RuntimeException } from '../../../../../../java/lang/RuntimeException.d.ts'
import type { InetSocketAddress } from '../../../../../../java/net/InetSocketAddress.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { ByteChannel } from '../../../../../../java/nio/channels/ByteChannel.d.ts'
import type { SelectionKey } from '../../../../../../java/nio/channels/SelectionKey.d.ts'
import type { Logger } from '../../../../../../java/util/logging/Logger.d.ts'
import type { SSLSession } from '../../../../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class WebSocketImpl extends Object implements WebSocket {
    static DEFAULT_PORT: number;
    static DEFAULT_WSS_PORT: number;
    constructor(arg0: WebSocketListener, arg1: Draft)
    constructor(arg0: WebSocketListener, arg1: Draft[])
    readonly attachment: Object;
    readonly channel: ByteChannel;
    // private closecode: number;
    // private closedremotely: boolean;
    // private closemessage: string;
    readonly draft: Draft;
    // private flushandclosestate: boolean;
    // private handshakerequest: ClientHandshake;
    inQueue: ByteBuffer[];
    // private key: SelectionKey;
    // private knownDrafts: Draft[];
    // private lastPong: number;
    // private log: Logger;
    outQueue: ByteBuffer[];
    readonly readyState: ReadyState;
    readonly resourceDescriptor: string;
    // private role: Role;
    // private synchronizeWriteObject: Object;
    // private tmpHandshakeBytes: ByteBuffer;
    readonly workerThread: WebSocketServer$WebSocketWorker;
    // private wsl: WebSocketListener;
    close(): void;
    close(arg0: InvalidDataException): void;
    close(arg0: number): void;
    close(arg0: number, arg1: string): void;
    close(arg0: number, arg1: string, arg2: boolean): void;
    closeConnection(): void;
    closeConnection(arg0: number, arg1: boolean): void;
    closeConnection(arg0: number, arg1: string): void;
    closeConnection(arg0: number, arg1: string, arg2: boolean): void;
    // private closeConnectionDueToInternalServerError(arg0: RuntimeException): void;
    // private closeConnectionDueToWrongHandshake(arg0: InvalidDataException): void;
    decode(arg0: ByteBuffer): void;
    // private decodeFrames(arg0: ByteBuffer): void;
    // private decodeHandshake(arg0: ByteBuffer): boolean;
    eot(): void;
    flushAndClose(arg0: number, arg1: string, arg2: boolean): void;
    // private generateHttpResponseDueToError(arg0: number): ByteBuffer;
    getAttachment<T extends Object | number | string | boolean>(): T;
    getChannel(): ByteChannel;
    getDraft(): Draft;
    getLastPong(): number;
    getLocalSocketAddress(): InetSocketAddress;
    getProtocol(): IProtocol;
    getReadyState(): ReadyState;
    getRemoteSocketAddress(): InetSocketAddress;
    getResourceDescriptor(): string;
    getSSLSession(): SSLSession;
    getSelectionKey(): SelectionKey;
    getWebSocketListener(): WebSocketListener;
    getWorkerThread(): WebSocketServer$WebSocketWorker;
    hasBufferedData(): boolean;
    hasSSLSupport(): boolean;
    isClosed(): boolean;
    isClosing(): boolean;
    isFlushAndClose(): boolean;
    isOpen(): boolean;
    // private open(arg0: Handshakedata): void;
    send(arg0: ByteBuffer): void;
    send(arg0: number[]): void;
    send(arg0: string): void;
    // private send(arg0: Framedata[]): void;
    sendFragmentedFrame(arg0: Opcode, arg1: ByteBuffer, arg2: boolean): void;
    sendFrame(arg0: Framedata): void;
    sendFrame(arg0: Framedata[]): void;
    sendPing(): void;
    setAttachment<T extends Object | number | string | boolean>(arg0: T): void;
    setChannel(arg0: ByteChannel): void;
    setSelectionKey(arg0: SelectionKey): void;
    setWorkerThread(arg0: WebSocketServer$WebSocketWorker): void;
    startHandshake(arg0: ClientHandshakeBuilder): void;
    toString(): string;
    updateLastPong(): void;
    // private write(arg0: ByteBuffer): void;
    // private write(arg0: ByteBuffer[]): void;
}