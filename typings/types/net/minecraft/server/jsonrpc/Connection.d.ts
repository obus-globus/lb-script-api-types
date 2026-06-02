import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Channel } from '../../../../io/netty/channel/Channel.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { JsonRpcLogger } from '../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { ManagementServer } from '../../../../net/minecraft/server/jsonrpc/ManagementServer.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { PendingRpcRequest } from '../../../../net/minecraft/server/jsonrpc/PendingRpcRequest.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class Connection extends SimpleChannelInboundHandler<JsonElement> {
    constructor(channel: Channel, managementServer: ManagementServer, minecraftApi: MinecraftApi, jsonrpcLogger: JsonRpcLogger)
    // private channel: Channel;
    // private clientInfo: ClientInfo;
    // private jsonRpcLogger: JsonRpcLogger;
    // private managementServer: ManagementServer;
    // private minecraftApi: MinecraftApi;
    // private pendingRequests: Int2ObjectMap<PendingRpcRequest<Object>>;
    // private transactionId: AtomicInteger;
    channelActive(ctx: ChannelHandlerContext): void;
    channelInactive(ctx: ChannelHandlerContext): void;
    channelRead0(channelHandlerContext: ChannelHandlerContext, jsonElement: JsonElement): void;
    dispatchIncomingRequest(method: string, params: JsonElement): JsonElement;
    exceptionCaught(ctx: ChannelHandlerContext, cause: Throwable): void;
    // private handleBatchRequest(batchRequests: JsonElement[]): JsonElement[];
    // private handleError(id: JsonElement, error: JsonObject): JsonObject;
    // private handleIncomingRequest(id: JsonElement, method: string, params: JsonElement): JsonObject;
    handleJsonObject(jsonObject: JsonObject): JsonObject;
    // private handleRequestResponse(id: number, result: JsonElement): void;
    sendNotification<Params extends Object | number | string | boolean>(method: Holder$Reference<OutgoingRpcMethod<Params, Object>>, params: Params): void;
    sendNotification(method: Holder$Reference<OutgoingRpcMethod<void, Object>>): void;
    sendRequest<Params extends Object | number | string | boolean>(method: Holder$Reference<OutgoingRpcMethod<Params, Result>>, params: Params): CompletableFuture<Result>;
    // private sendRequest<Params extends Object | number | string | boolean>(method: Holder$Reference<OutgoingRpcMethod<Params, Result>>, params: Params, expectReply: boolean): CompletableFuture<Result>;
    sendRequest(method: Holder$Reference<OutgoingRpcMethod<void, Result>>): CompletableFuture<Result>;
    tick(): void;
}