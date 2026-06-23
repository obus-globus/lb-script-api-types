import type { AbstractWebSocket } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/AbstractWebSocket.d.ts'
import type { WebSocket } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { WebSocketImpl } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { DnsResolver } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/client/DnsResolver.d.ts'
import type { Draft } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/drafts/Draft.d.ts'
import type { Opcode } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/Opcode.d.ts'
import type { ReadyState } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/enums/ReadyState.d.ts'
import type { Framedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/framing/Framedata.d.ts'
import type { Handshakedata } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/Handshakedata.d.ts'
import type { ServerHandshake } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/handshake/ServerHandshake.d.ts'
import type { IProtocol } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/protocols/IProtocol.d.ts'
import type { IOException } from '../../../../../../../java/io/IOException.d.ts'
import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { Exception } from '../../../../../../../java/lang/Exception.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { InetSocketAddress } from '../../../../../../../java/net/InetSocketAddress.d.ts'
import type { Proxy } from '../../../../../../../java/net/Proxy.d.ts'
import type { Socket } from '../../../../../../../java/net/Socket.d.ts'
import type { URI } from '../../../../../../../java/net/URI.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CountDownLatch } from '../../../../../../../java/util/concurrent/CountDownLatch.d.ts'
import type { TimeUnit } from '../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { SocketFactory } from '../../../../../../../javax/net/SocketFactory.d.ts'
import type { SSLParameters } from '../../../../../../../javax/net/ssl/SSLParameters.d.ts'
import type { SSLSession } from '../../../../../../../javax/net/ssl/SSLSession.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class WebSocketClient extends AbstractWebSocket implements WebSocket, Runnable {
    constructor(arg0: URI)
    constructor(arg0: URI, arg1: Draft)
    constructor(arg0: URI, arg1: Draft, arg2: { [key: string]: string })
    constructor(arg0: URI, arg1: Draft, arg2: { [key: string]: string }, arg3: number)
    constructor(arg0: URI, arg1: { [key: string]: string })
    // private closeLatch: CountDownLatch;
    // private connectLatch: CountDownLatch;
    // private connectReadThread: Thread;
    // private connectTimeout: number;
    readonly dnsResolver: DnsResolver;
    readonly draft: Draft;
    // private engine: WebSocketImpl;
    // private headers: { [key: string]: string };
    // private ostream: OutputStream;
    readonly proxy: Proxy;
    readonly socket: Socket;
    readonly socketFactory: SocketFactory;
    // private uri: URI;
    // private writeThread: Thread;
    addHeader(arg0: string, arg1: string): void;
    clearHeaders(): void;
    close(): void;
    close(arg0: number): void;
    close(arg0: number, arg1: string): void;
    closeBlocking(): void;
    closeConnection(arg0: number, arg1: string): void;
    connect(): void;
    connectBlocking(): boolean;
    connectBlocking(arg0: number, arg1: TimeUnit): boolean;
    getAttachment<T extends unknown>(): T;
    getConnection(): WebSocket;
    getConnections(): WebSocket[];
    getDraft(): Draft;
    getLocalSocketAddress(): InetSocketAddress;
    getLocalSocketAddress(arg0: WebSocket): InetSocketAddress;
    // private getPort(): number;
    getProtocol(): IProtocol;
    getReadyState(): ReadyState;
    getRemoteSocketAddress(): InetSocketAddress;
    getRemoteSocketAddress(arg0: WebSocket): InetSocketAddress;
    getResourceDescriptor(): string;
    getSSLSession(): SSLSession;
    getSocket(): Socket;
    getURI(): URI;
    // private handleIOException(arg0: IOException): void;
    hasBufferedData(): boolean;
    hasSSLSupport(): boolean;
    isClosed(): boolean;
    isClosing(): boolean;
    isFlushAndClose(): boolean;
    isOpen(): boolean;
    onClose(arg0: number, arg1: string, arg2: boolean): void;
    onCloseInitiated(arg0: number, arg1: string): void;
    onClosing(arg0: number, arg1: string, arg2: boolean): void;
    onError(arg0: Exception): void;
    onMessage(arg0: ByteBuffer): void;
    onMessage(arg0: string): void;
    onOpen(arg0: ServerHandshake): void;
    onSetSSLParameters(arg0: SSLParameters): void;
    onWebsocketClose(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onWebsocketCloseInitiated(arg0: WebSocket, arg1: number, arg2: string): void;
    onWebsocketClosing(arg0: WebSocket, arg1: number, arg2: string, arg3: boolean): void;
    onWebsocketError(arg0: WebSocket, arg1: Exception): void;
    onWebsocketMessage(arg0: WebSocket, arg1: ByteBuffer): void;
    onWebsocketMessage(arg0: WebSocket, arg1: string): void;
    onWebsocketOpen(arg0: WebSocket, arg1: Handshakedata): void;
    onWriteDemand(arg0: WebSocket): void;
    // private prepareSocket(): boolean;
    reconnect(): void;
    reconnectBlocking(): boolean;
    removeHeader(arg0: string): string;
    // private reset(): void;
    run(): void;
    send(arg0: ByteBuffer): void;
    send(arg0: number[]): void;
    send(arg0: string): void;
    sendFragmentedFrame(arg0: Opcode, arg1: ByteBuffer, arg2: boolean): void;
    sendFrame(arg0: Framedata): void;
    sendFrame(arg0: Framedata[]): void;
    // private sendHandshake(): void;
    sendPing(): void;
    setAttachment<T extends unknown>(arg0: T): void;
    setDnsResolver(arg0: DnsResolver): void;
    setProxy(arg0: Proxy): void;
    setSocket(arg0: Socket): void;
    setSocketFactory(arg0: SocketFactory): void;
    // private upgradeSocketToSSL(): void;
}