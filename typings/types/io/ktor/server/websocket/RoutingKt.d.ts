import type { Route } from '../../../../io/ktor/server/routing/Route.d.ts'
import type { DefaultWebSocketServerSession } from '../../../../io/ktor/server/websocket/DefaultWebSocketServerSession.d.ts'
import type { WebSocketServerSession } from '../../../../io/ktor/server/websocket/WebSocketServerSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RoutingKt extends Object {
    static webSocket(self: Route, path: string, protocol: string | null, handler: (param0: DefaultWebSocketServerSession) => void): Route;
    static webSocket(self: Route, protocol: string | null, handler: (param0: DefaultWebSocketServerSession) => void): Route;
    static webSocket(self: Route, path: string, protocol: string | null, handler: (param0: DefaultWebSocketServerSession) => void): void;
    static webSocket(self: Route, protocol: string | null, handler: (param0: DefaultWebSocketServerSession) => void): void;
    static webSocketRaw(self: Route, protocol: string | null, negotiateExtensions: boolean, handler: (param0: WebSocketServerSession) => void): Route;
    static webSocketRaw(self: Route, path: string, protocol: string | null, negotiateExtensions: boolean, handler: (param0: WebSocketServerSession) => void): Route;
    static webSocketRaw(self: Route, path: string, protocol: string | null, handler: (param0: WebSocketServerSession) => void): Route;
    static webSocketRaw(self: Route, protocol: string | null, handler: (param0: WebSocketServerSession) => void): Route;
    static webSocketRaw(self: Route, protocol: string | null, negotiateExtensions: boolean, handler: (param0: WebSocketServerSession) => void): void;
    static webSocketRaw(self: Route, path: string, protocol: string | null, negotiateExtensions: boolean, handler: (param0: WebSocketServerSession) => void): void;
    static webSocketRaw(self: Route, path: string, protocol: string | null, handler: (param0: WebSocketServerSession) => void): void;
    static webSocketRaw(self: Route, protocol: string | null, handler: (param0: WebSocketServerSession) => void): void;
}