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
export class IncomingRpcMethod$Method<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Record implements IncomingRpcMethod<Params, Result> {
    static method(paramfunction: (param0: MinecraftApi, param1: Object | null, param2: ClientInfo) => Object | null): IncomingRpcMethod$IncomingRpcMethodBuilder<Object, Object>;
    static method(paramsupplier: (param0: MinecraftApi) => Object | null): IncomingRpcMethod$IncomingRpcMethodBuilder<void, Object>;
    static method(paramfunction: (param0: MinecraftApi, param1: ClientInfo) => Object | null): IncomingRpcMethod$IncomingRpcMethodBuilder<void, Object>;
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