import type { AbstractWebSocket } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/AbstractWebSocket.d.ts'
import type { WebSocket } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { WebSocketFactory } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketFactory.d.ts'
import type { WebSocketImpl } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { WebSocketServerFactory } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketServerFactory.d.ts'
import type { Draft } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { ClientHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ClientHandshake.d.ts'
import type { Handshakedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { WebSocketServer$WebSocketWorker } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/server/WebSocketServer$WebSocketWorker.d.ts'
import type { IOException } from '../../../../../../../java/io/IOException.d.ts'
import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { InetSocketAddress } from '../../../../../../../java/net/InetSocketAddress.d.ts'
import type { Socket } from '../../../../../../../java/net/Socket.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { SelectionKey } from '../../../../../../../java/nio/channels/SelectionKey.d.ts'
import type { Selector } from '../../../../../../../java/nio/channels/Selector.d.ts'
import type { ServerSocketChannel } from '../../../../../../../java/nio/channels/ServerSocketChannel.d.ts'
import type { AtomicBoolean } from '../../../../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Logger } from '../../../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export abstract class WebSocketServer extends AbstractWebSocket implements Runnable {
    constructor()
    constructor(arg0: InetSocketAddress)
    constructor(arg0: InetSocketAddress, arg1: number)
    constructor(arg0: InetSocketAddress, arg1: number, arg2: Draft[])
    constructor(arg0: InetSocketAddress, arg1: number, arg2: Draft[], arg3: E[])
    constructor(arg0: InetSocketAddress, arg1: Draft[])
    readonly address: InetSocketAddress;
    // private buffers: ByteBuffer[];
    readonly connections: E[];
    // private decoders: WebSocketServer$WebSocketWorker[];
    // private drafts: Draft[];
    // private iqueue: WebSocketImpl[];
    // private isclosed: AtomicBoolean;
    // private log: Logger;
    readonly maxPendingConnections: number;
    // private queueinvokes: number;
    // private queuesize: AtomicInteger;
    // private selector: Selector;
    // private selectorthread: Thread;
    // private server: ServerSocketChannel;
    // private wsf: WebSocketServerFactory;
    addConnection(arg0: WebSocket): boolean;
    allocateBuffers(arg0: WebSocket): void;
    broadcast(arg0: ByteBuffer): void;
    broadcast(arg0: ByteBuffer, arg1: E[]): void;
    broadcast(arg0: number[]): void;
    broadcast(arg0: number[], arg1: E[]): void;
    broadcast(arg0: string): void;
    broadcast(arg0: string, arg1: E[]): void;
    createBuffer(): ByteBuffer;
    // private doAccept(arg0: SelectionKey, arg1: Iterator<SelectionKey>): void;
    // private doAdditionalRead(): void;
    // private doBroadcast(arg0: Object, arg1: E[]): void;
    // private doEnsureSingleThread(): boolean;
    // private doRead(arg0: SelectionKey, arg1: Iterator<SelectionKey>): boolean;
    // private doServerShutdown(): void;
    // private doSetupSelectorAndServerThread(): boolean;
    // private doWrite(arg0: SelectionKey): void;
    // private fillFrames(arg0: Draft, arg1: Map<Draft, Framedata[]>, arg2: string, arg3: ByteBuffer): void;
    getAddress(): InetSocketAddress;
    getConnections(): E[];
    getDraft(): Draft[];
    getLocalSocketAddress(arg0: WebSocket): InetSocketAddress;
    getMaxPendingConnections(): number;
    getPort(): number;
    getRemoteSocketAddress(arg0: WebSocket): InetSocketAddress;
    // private getSocket(arg0: WebSocket): Socket;
    getWebSocketFactory(): WebSocketFactory;
    // private handleFatal(arg0: WebSocket, arg1: Exception): void;
    // private handleIOException(arg0: SelectionKey, arg1: WebSocket, arg2: IOException): void;
    onClose(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onCloseInitiated(arg0: WebSocket, arg1: number, arg2: string): void;
    onClosing(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onConnect(arg0: SelectionKey): boolean;
    onError(arg0: WebSocket, arg1: Exception): void;
    onMessage(arg0: WebSocket, arg1: ByteBuffer): void;
    onMessage(arg0: WebSocket, arg1: string): void;
    onOpen(arg0: WebSocket, arg1: ClientHandshake): void;
    onStart(): void;
    onWebsocketClose(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onWebsocketCloseInitiated(arg0: WebSocket, arg1: number, arg2: string): void;
    onWebsocketClosing(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onWebsocketError(arg0: WebSocket, arg1: Exception): void;
    onWebsocketMessage(arg0: WebSocket, arg1: ByteBuffer): void;
    onWebsocketMessage(arg0: WebSocket, arg1: string): void;
    onWebsocketOpen(arg0: WebSocket, arg1: Handshakedata): void;
    onWriteDemand(arg0: WebSocket): void;
    // private pushBuffer(arg0: ByteBuffer): void;
    queue(arg0: WebSocketImpl): void;
    releaseBuffers(arg0: WebSocket): void;
    removeConnection(arg0: WebSocket): boolean;
    run(): void;
    setDaemon(arg0: boolean): void;
    setMaxPendingConnections(arg0: number): void;
    setWebSocketFactory(arg0: WebSocketServerFactory): void;
    start(): void;
    stop(): void;
    stop(arg0: number): void;
    stop(arg0: number, arg1: string): void;
    // private takeBuffer(): ByteBuffer;
}