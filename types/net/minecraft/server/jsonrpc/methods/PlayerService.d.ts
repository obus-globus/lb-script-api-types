import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { PlayerService$KickDto } from '../../../../../net/minecraft/server/jsonrpc/methods/PlayerService$KickDto.d.ts'
export class PlayerService extends Object {
    static get(paramminecraftApi: MinecraftApi): PlayerDto[];
    static kick(paramminecraftApi: MinecraftApi, paramkick: PlayerService$KickDto[], paramclientInfo: ClientInfo): PlayerDto[];
    constructor()
}