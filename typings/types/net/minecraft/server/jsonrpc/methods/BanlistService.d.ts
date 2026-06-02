import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { BanlistService$UserBanDto } from '../../../../../net/minecraft/server/jsonrpc/methods/BanlistService$UserBanDto.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class BanlistService extends Object {
    static add(paramminecraftApi: MinecraftApi, parambans: BanlistService$UserBanDto[], paramclientInfo: ClientInfo): BanlistService$UserBanDto[];
    static clear(paramminecraftApi: MinecraftApi, paramclientInfo: ClientInfo): BanlistService$UserBanDto[];
    static get(paramminecraftApi: MinecraftApi): BanlistService$UserBanDto[];
    static remove(paramminecraftApi: MinecraftApi, paramremove: PlayerDto[], paramclientInfo: ClientInfo): BanlistService$UserBanDto[];
    static set(paramminecraftApi: MinecraftApi, parambans: BanlistService$UserBanDto[], paramclientInfo: ClientInfo): BanlistService$UserBanDto[];
    constructor()
}