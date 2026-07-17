import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IncomingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod.d.ts'
import type { IncomingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$Attributes.d.ts'
import type { IncomingRpcMethod$ParameterlessRpcMethodFunction } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$ParameterlessRpcMethodFunction.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class IncomingRpcMethod$ParameterlessMethod<Params extends unknown, Result extends unknown> extends Record implements IncomingRpcMethod<Params, Result> {
    constructor(info: MethodInfo<Params, Result>, attributes: IncomingRpcMethod$Attributes, supplier: (param0: MinecraftApi, param1: ClientInfo) => Result)
    // private attributes: IncomingRpcMethod$Attributes;
    // private info: MethodInfo<Params, Result>;
    // private supplier: (param0: MinecraftApi, param1: ClientInfo) => Result;
    apply(minecraftApi: MinecraftApi, paramsJson: JsonElement, clientInfo: ClientInfo): JsonElement;
    attributes(): IncomingRpcMethod$Attributes;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): MethodInfo<Params, Result>;
    supplier(): (param0: MinecraftApi, param1: ClientInfo) => Result;
    toString(): string;
}