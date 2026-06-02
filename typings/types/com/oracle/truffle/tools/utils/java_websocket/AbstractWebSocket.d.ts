import type { WebSocket } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocket.d.ts'
import type { WebSocketAdapter } from '../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketAdapter.d.ts'
import type { ScheduledExecutorService } from '../../../../../../java/util/concurrent/ScheduledExecutorService.d.ts'
import type { ScheduledFuture } from '../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { Logger } from '../../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractWebSocket extends WebSocketAdapter {
    constructor()
    // private connectionLostCheckerFuture: ScheduledFuture<Object>;
    // private connectionLostCheckerService: ScheduledExecutorService;
    readonly connectionLostTimeout: number;
    readonly daemon: boolean;
    // private log: Logger;
    readonly receiveBufferSize: number;
    readonly reuseAddr: boolean;
    // private syncConnectionLost: Object;
    readonly tcpNoDelay: boolean;
    // private websocketRunning: boolean;
    // private cancelConnectionLostTimer(): void;
    // private executeConnectionLostDetection(arg0: WebSocket, arg1: number): void;
    getConnectionLostTimeout(): number;
    getConnections(): E[];
    getReceiveBufferSize(): number;
    isDaemon(): boolean;
    isReuseAddr(): boolean;
    isTcpNoDelay(): boolean;
    // private restartConnectionLostTimer(): void;
    setConnectionLostTimeout(arg0: number): void;
    setDaemon(arg0: boolean): void;
    setReceiveBufferSize(arg0: number): void;
    setReuseAddr(arg0: boolean): void;
    setTcpNoDelay(arg0: boolean): void;
    startConnectionLostTimer(): void;
    stopConnectionLostTimer(): void;
}