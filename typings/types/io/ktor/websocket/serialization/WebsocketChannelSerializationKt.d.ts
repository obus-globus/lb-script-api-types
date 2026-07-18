import type { WebsocketContentConverter } from '../../../../io/ktor/serialization/WebsocketContentConverter.d.ts'
import type { TypeInfo } from '../../../../io/ktor/util/reflect/TypeInfo.d.ts'
import type { WebSocketSession } from '../../../../io/ktor/websocket/WebSocketSession.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WebsocketChannelSerializationKt extends Object {
    static receiveDeserializedBase(self: WebSocketSession, converter: WebsocketContentConverter, charset: Charset): Object | null;
    static receiveDeserializedBase(self: WebSocketSession, typeInfo: TypeInfo, converter: WebsocketContentConverter, charset: Charset): Object | null;
    static sendSerializedBase(self: WebSocketSession, data: Object | null, converter: WebsocketContentConverter, charset: Charset): void;
    static sendSerializedBase(self: WebSocketSession, data: Object | null, typeInfo: TypeInfo, converter: WebsocketContentConverter, charset: Charset): void;
}