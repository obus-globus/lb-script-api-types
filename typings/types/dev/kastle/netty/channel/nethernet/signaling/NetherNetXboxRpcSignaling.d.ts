import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { AbstractNetherNetXboxSignaling } from '../../../../../../dev/kastle/netty/channel/nethernet/signaling/AbstractNetherNetXboxSignaling.d.ts'
import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { TextWebSocketFrame } from '../../../../../../io/netty/handler/codec/http/websocketx/TextWebSocketFrame.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
export class NetherNetXboxRpcSignaling extends AbstractNetherNetXboxSignaling {
    constructor(arg0: number, arg1: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: string)
    // private pendingRequests: { [key: string]: CompletableFuture<JsonObject> };
    channelRead0(arg0: ChannelHandlerContext, arg1: TextWebSocketFrame): void;
    // private createSendParams(arg0: string, arg1: string): JsonObject;
    // private handleRequest(arg0: JsonObject): void;
    // private handleResponse(arg0: JsonObject): void;
    onConnected(arg0: ChannelHandlerContext): void;
    // private processIncomingMessage(arg0: JsonObject): void;
    // private sendJsonRpcRequest(arg0: string, arg1: JsonObject): CompletableFuture<JsonObject>;
    // private sendJsonRpcResult(arg0: JsonElement, arg1: JsonElement): void;
    sendSignal(arg0: string, arg1: string): void;
}