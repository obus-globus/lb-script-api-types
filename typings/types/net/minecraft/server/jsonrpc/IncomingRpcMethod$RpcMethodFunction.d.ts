import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export interface IncomingRpcMethod$RpcMethodFunction<Params extends unknown, Result extends unknown> extends Object{
    apply(api: MinecraftApi, params: Params, clientInfo: ClientInfo): Result;
}