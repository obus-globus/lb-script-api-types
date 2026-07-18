import type { WebSockets } from '../../../../io/ktor/server/websocket/WebSockets.d.ts'
import type { WebSockets$WebSocketOptions } from '../../../../io/ktor/server/websocket/WebSockets$WebSocketOptions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Duration } from '../../../../kotlin/time/Duration.d.ts'
export class DurationsKt extends Object {
// (invalid TS: name contains '-')     static WebSockets-EBYhdyk(pingInterval: Duration | null, timeout: Duration, maxFrameSize: number, masking: boolean): WebSockets;
    static getPingInterval(paramarg0: WebSockets): Duration;
    static getPingPeriod(paramarg0: WebSockets$WebSocketOptions): Duration;
    static getTimeout(paramarg0: WebSockets$WebSocketOptions): number;
    static getTimeout(paramarg0: WebSockets): number;
// (invalid TS: name contains '-')     static setPingPeriod-6Au4x4Y(paramarg0: WebSockets$WebSocketOptions, paramarg1: Duration): void;
// (invalid TS: name contains '-')     static setTimeout-HG0u8IE(paramarg0: WebSockets$WebSocketOptions, paramarg1: number): void;
}