import type { DefaultWebSocketSession } from '../../../io/ktor/websocket/DefaultWebSocketSession.d.ts'
import type { WebSocketChannelsConfig } from '../../../io/ktor/websocket/WebSocketChannelsConfig.d.ts'
import type { WebSocketSession } from '../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class DefaultWebSocketSessionKt extends Object {
    static PINGER_DISABLED: number;
    static DefaultWebSocketSession(session: WebSocketSession, pingIntervalMillis: number, timeoutMillis: number): DefaultWebSocketSession;
    static DefaultWebSocketSession(session: WebSocketSession, pingIntervalMillis: number, timeoutMillis: number, channelsConfig: WebSocketChannelsConfig): DefaultWebSocketSession;
    static getLOGGER(): Logger;
    static getPingInterval(paramarg0: DefaultWebSocketSession): Duration;
    static getTimeout(paramarg0: DefaultWebSocketSession): number;
// (invalid TS: name contains '-')     static setPingInterval-6Au4x4Y(paramarg0: DefaultWebSocketSession, paramarg1: Duration): void;
// (invalid TS: name contains '-')     static setTimeout-HG0u8IE(paramarg0: DefaultWebSocketSession, paramarg1: number): void;
}