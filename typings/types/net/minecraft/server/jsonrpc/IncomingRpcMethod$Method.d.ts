import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IncomingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod.d.ts'
import type { IncomingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$Attributes.d.ts'
import type { IncomingRpcMethod$IncomingRpcMethodBuilder } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$IncomingRpcMethodBuilder.d.ts'
import type { IncomingRpcMethod$ParameterlessRpcMethodFunction } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$ParameterlessRpcMethodFunction.d.ts'
import type { IncomingRpcMethod$RpcMethodFunction } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$RpcMethodFunction.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class IncomingRpcMethod$Method<Params extends unknown, Result extends unknown> extends Record implements IncomingRpcMethod<Params, Result> {
    static method<Params extends unknown, Result extends unknown>(paramfunction: (param0: MinecraftApi, param1: Params, param2: ClientInfo) => Result): IncomingRpcMethod$IncomingRpcMethodBuilder<Params, Result>;
    static method<Result extends unknown>(paramsupplier: (param0: MinecraftApi) => Result): IncomingRpcMethod$IncomingRpcMethodBuilder<void, Result>;
    static method<Result extends unknown>(paramfunction: (param0: MinecraftApi, param1: ClientInfo) => Result): IncomingRpcMethod$IncomingRpcMethodBuilder<void, Result>;
    constructor(info: MethodInfo<Params, Result>, attributes: IncomingRpcMethod$Attributes, function_: (param0: MinecraftApi, param1: Params, param2: ClientInfo) => Result)
    // private attributes: IncomingRpcMethod$Attributes;
    // private function: (param0: MinecraftApi, param1: Params, param2: ClientInfo) => Result;
    // private info: MethodInfo<Params, Result>;
    apply(minecraftApi: MinecraftApi, paramsJson: JsonElement, clientInfo: ClientInfo): JsonElement;
    attributes(): IncomingRpcMethod$Attributes;
    equals(o: Object | null): boolean;
    function(): (param0: MinecraftApi, param1: Params, param2: ClientInfo) => Result;
    hashCode(): number;
    info(): MethodInfo<Params, Result>;
    toString(): string;
}