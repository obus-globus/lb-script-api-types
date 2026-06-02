import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class AllowlistService extends Object {
    static add(paramminecraftApi: MinecraftApi, paramplayerDtos: PlayerDto[], paramclientInfo: ClientInfo): PlayerDto[];
    static clear(paramminecraftApi: MinecraftApi, paramclientInfo: ClientInfo): PlayerDto[];
    static get(paramminecraftApi: MinecraftApi): PlayerDto[];
    static remove(paramminecraftApi: MinecraftApi, paramplayerDtos: PlayerDto[], paramclientInfo: ClientInfo): PlayerDto[];
    static set(paramminecraftApi: MinecraftApi, paramplayerDtos: PlayerDto[], paramclientInfo: ClientInfo): PlayerDto[];
    constructor()
}