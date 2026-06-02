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
export class IncomingRpcMethod$ParameterlessMethod<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Record implements IncomingRpcMethod<Params, Result> {
    static method(paramfunction: (param0: Object | null, param1: Object | null, param2: MinecraftApi) => unknown): IncomingRpcMethod$IncomingRpcMethodBuilder<Object, Object>;
    static method(paramsupplier: (param0: MinecraftApi) => Object | null): IncomingRpcMethod$IncomingRpcMethodBuilder<void, Object>;
    static method(paramfunction: (param0: Object | null, param1: MinecraftApi) => unknown): IncomingRpcMethod$IncomingRpcMethodBuilder<void, Object>;
    constructor(info: MethodInfo<Params, Result>, attributes: IncomingRpcMethod$Attributes, supplier: (param0: Result, param1: MinecraftApi) => unknown)
    // private attributes: IncomingRpcMethod$Attributes;
    // private info: MethodInfo<Params, Result>;
    // private supplier: (param0: Result, param1: MinecraftApi) => unknown;
    apply(minecraftApi: MinecraftApi, paramsJson: JsonElement, clientInfo: ClientInfo): JsonElement;
    attributes(): IncomingRpcMethod$Attributes;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): MethodInfo<Params, Result>;
    supplier(): (param0: Result, param1: MinecraftApi) => unknown;
    toString(): string;
}