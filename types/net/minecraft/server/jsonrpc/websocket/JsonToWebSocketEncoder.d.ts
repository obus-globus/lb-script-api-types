import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToMessageEncoder } from '../../../../../io/netty/handler/codec/MessageToMessageEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonToWebSocketEncoder extends MessageToMessageEncoder<JsonElement> {
    constructor()
    encode(ctx: ChannelHandlerContext, msg: JsonElement, out: Object[]): void;
}