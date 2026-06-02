import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export interface MinecraftServerStateService extends Object{
    broadcastSystemMessage(message: Component, overlay: boolean, clientInfo: ClientInfo): void;
    halt(waitForShutdown: boolean, clientInfo: ClientInfo): void;
    isReady(): boolean;
    saveEverything(suppressLogs: boolean, flush: boolean, force: boolean, clientInfo: ClientInfo): boolean;
    sendSystemMessage(message: Component, overlay: boolean, players: E[], clientInfo: ClientInfo): void;
    sendSystemMessage(message: Component, clientInfo: ClientInfo): void;
}