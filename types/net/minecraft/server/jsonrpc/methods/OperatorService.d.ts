import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerDto } from '../../../../../net/minecraft/server/jsonrpc/api/PlayerDto.d.ts'
import type { MinecraftApi } from '../../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
import type { OperatorService$OperatorDto } from '../../../../../net/minecraft/server/jsonrpc/methods/OperatorService$OperatorDto.d.ts'
export class OperatorService extends Object {
    static add(paramminecraftApi: MinecraftApi, paramoperators: OperatorService$OperatorDto[], paramclientInfo: ClientInfo): OperatorService$OperatorDto[];
    static clear(paramminecraftApi: MinecraftApi, paramclientInfo: ClientInfo): OperatorService$OperatorDto[];
    static get(paramminecraftApi: MinecraftApi): OperatorService$OperatorDto[];
    static remove(paramminecraftApi: MinecraftApi, paramplayerDtos: PlayerDto[], paramclientInfo: ClientInfo): OperatorService$OperatorDto[];
    static set(paramminecraftApi: MinecraftApi, paramoperators: OperatorService$OperatorDto[], paramclientInfo: ClientInfo): OperatorService$OperatorDto[];
    constructor()
}