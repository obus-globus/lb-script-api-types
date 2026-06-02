import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { DedicatedServer } from '../../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
import type { JsonRpcLogger } from '../../../../../net/minecraft/server/jsonrpc/JsonRpcLogger.d.ts'
import type { MinecraftServerStateService } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftServerStateService.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class MinecraftServerStateServiceImpl extends Object implements MinecraftServerStateService {
    constructor(server: DedicatedServer, jsonrpcLogger: JsonRpcLogger)
    // private jsonrpcLogger: JsonRpcLogger;
    // private server: DedicatedServer;
    broadcastSystemMessage(message: Component, overlay: boolean, clientInfo: ClientInfo): void;
    halt(waitForShutdown: boolean, clientInfo: ClientInfo): void;
    isReady(): boolean;
    saveEverything(suppressLogs: boolean, flush: boolean, force: boolean, clientInfo: ClientInfo): boolean;
    sendSystemMessage(message: Component, overlay: boolean, players: E[], clientInfo: ClientInfo): void;
    sendSystemMessage(message: Component, clientInfo: ClientInfo): void;
}