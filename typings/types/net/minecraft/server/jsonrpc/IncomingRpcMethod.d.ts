import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IncomingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$Attributes.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export interface IncomingRpcMethod<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Object{
    apply(minecraftApi: MinecraftApi, paramsJson: JsonElement, clientInfo: ClientInfo): JsonElement;
    attributes(): IncomingRpcMethod$Attributes;
    info(): MethodInfo<Params, Result>;
}