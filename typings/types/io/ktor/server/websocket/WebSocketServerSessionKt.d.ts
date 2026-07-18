import type { WebsocketContentConverter } from '../../../../io/ktor/serialization/WebsocketContentConverter.d.ts'
import type { Application } from '../../../../io/ktor/server/application/Application.d.ts'
import type { ApplicationCall } from '../../../../io/ktor/server/application/ApplicationCall.d.ts'
import type { DefaultWebSocketServerSession } from '../../../../io/ktor/server/websocket/DefaultWebSocketServerSession.d.ts'
import type { WebSocketServerSession } from '../../../../io/ktor/server/websocket/WebSocketServerSession.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { DefaultWebSocketSession } from '../../../../io/ktor/websocket/DefaultWebSocketSession.d.ts'
import type { WebSocketSession } from '../../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WebSocketServerSessionKt extends Object {
    static getApplication(paramarg0: WebSocketServerSession): Application;
    static getConverter(paramarg0: WebSocketServerSession): WebsocketContentConverter;
    static receiveDeserialized<T extends unknown>(self: WebSocketServerSession, typeInfo: TypeInfo): T;
    static receiveDeserialized<T extends unknown>(self: WebSocketServerSession): T;
    static sendSerialized<T extends unknown>(self: WebSocketServerSession, data: T): void;
    static sendSerialized(self: WebSocketServerSession, data: Object | null, typeInfo: TypeInfo): void;
    static toServerSession(self: DefaultWebSocketSession, call: ApplicationCall): DefaultWebSocketServerSession;
    static toServerSession(self: WebSocketSession, call: ApplicationCall): WebSocketServerSession;
}