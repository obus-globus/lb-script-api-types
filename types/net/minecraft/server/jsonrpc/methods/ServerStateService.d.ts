import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { ServerStateService$ServerState } from '../../../../../net/minecraft/server/jsonrpc/methods/ServerStateService$ServerState.d.ts'
import type { ServerStateService$SystemMessage } from '../../../../../net/minecraft/server/jsonrpc/methods/ServerStateService$SystemMessage.d.ts'
export class ServerStateService extends Object {
    static save(paramminecraftApi: MinecraftApi, paramflush: boolean, paramclientInfo: ClientInfo): boolean;
    static status(paramminecraftApi: MinecraftApi): ServerStateService$ServerState;
    static stop(paramminecraftApi: MinecraftApi, paramclientInfo: ClientInfo): boolean;
    static systemMessage(paramminecraftApi: MinecraftApi, paramsystemMessage: ServerStateService$SystemMessage, paramclientInfo: ClientInfo): boolean;
    constructor()
}