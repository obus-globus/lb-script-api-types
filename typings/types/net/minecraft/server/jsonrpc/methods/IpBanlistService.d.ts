import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { IpBanlistService$IncomingIpBanDto } from '../../../../../net/minecraft/server/jsonrpc/methods/IpBanlistService$IncomingIpBanDto.d.ts'
import type { IpBanlistService$IpBanDto } from '../../../../../net/minecraft/server/jsonrpc/methods/IpBanlistService$IpBanDto.d.ts'
export class IpBanlistService extends Object {
    static add(paramminecraftApi: MinecraftApi, parambans: IpBanlistService$IncomingIpBanDto[], paramclientInfo: ClientInfo): IpBanlistService$IpBanDto[];
    static clear(paramminecraftApi: MinecraftApi, paramclientInfo: ClientInfo): IpBanlistService$IpBanDto[];
    static get(paramminecraftApi: MinecraftApi): IpBanlistService$IpBanDto[];
    static remove(paramminecraftApi: MinecraftApi, paramban: string[], paramclientInfo: ClientInfo): IpBanlistService$IpBanDto[];
    static set(paramminecraftApi: MinecraftApi, paramips: IpBanlistService$IpBanDto[], paramclientInfo: ClientInfo): IpBanlistService$IpBanDto[];
    constructor()
}