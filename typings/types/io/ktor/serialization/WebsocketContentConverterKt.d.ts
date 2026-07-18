import type { WebsocketContentConverter } from '../../../io/ktor/serialization/WebsocketContentConverter.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class WebsocketContentConverterKt extends Object {
    static deserialize<T extends unknown>(self: WebsocketContentConverter, content: Frame, charset: Charset): T;
    static serialize<T extends unknown>(self: WebsocketContentConverter, value: T, charset: Charset): Frame;
}