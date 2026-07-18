import type { CloseReason } from '../../../io/ktor/websocket/CloseReason.d.ts'
import type { WebSocketExtension } from '../../../io/ktor/websocket/WebSocketExtension.d.ts'
import type { WebSocketExtensionFactory } from '../../../io/ktor/websocket/WebSocketExtensionFactory.d.ts'
import type { WebSocketSession } from '../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class WebSocketSessionKt extends Object {
    static close(self: WebSocketSession, reason: CloseReason): void;
    static close(self: WebSocketSession, cause: Throwable | null): void;
    static closeExceptionally(self: WebSocketSession, cause: Throwable): void;
    static extension<T extends WebSocketExtension<Object>>(self: WebSocketSession, extension: WebSocketExtensionFactory<Object, T>): T;
    static extensionOrNull<T extends WebSocketExtension<Object>>(self: WebSocketSession, extension: WebSocketExtensionFactory<Object, T>): T | null;
    static send(self: WebSocketSession, content: number[]): void;
    static send(self: WebSocketSession, content: string): void;
}