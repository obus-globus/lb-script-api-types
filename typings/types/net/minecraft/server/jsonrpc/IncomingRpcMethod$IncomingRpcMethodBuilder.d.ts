import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { IncomingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod.d.ts'
import type { IncomingRpcMethod$ParameterlessRpcMethodFunction } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$ParameterlessRpcMethodFunction.d.ts'
import type { IncomingRpcMethod$RpcMethodFunction } from '../../../../net/minecraft/server/jsonrpc/IncomingRpcMethod$RpcMethodFunction.d.ts'
import type { ParamInfo } from '../../../../net/minecraft/server/jsonrpc/api/ParamInfo.d.ts'
import type { ResultInfo } from '../../../../net/minecraft/server/jsonrpc/api/ResultInfo.d.ts'
import type { Schema } from '../../../../net/minecraft/server/jsonrpc/api/Schema.d.ts'
import type { MinecraftApi } from '../../../../net/minecraft/server/jsonrpc/internalapi/MinecraftApi.d.ts'
import type { ClientInfo } from '../../../../net/minecraft/server/jsonrpc/methods/ClientInfo.d.ts'
export class IncomingRpcMethod$IncomingRpcMethodBuilder<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Object {
    constructor(supplier: (param0: MinecraftApi) => Result)
    constructor(function_: (param0: MinecraftApi, param1: ClientInfo) => Result)
    constructor(function_: (param0: MinecraftApi, param1: Params, param2: ClientInfo) => Result)
    // private description: string;
    // private discoverable: boolean;
    // private paramInfo: ParamInfo<Params>;
    // private parameterFunction: (param0: MinecraftApi, param1: Params, param2: ClientInfo) => Result;
    // private parameterlessFunction: (param0: MinecraftApi, param1: ClientInfo) => Result;
    // private resultInfo: ResultInfo<Result>;
    // private runOnMainThread: boolean;
    build(): IncomingRpcMethod<Params, Result>;
    description(description: string): IncomingRpcMethod$IncomingRpcMethodBuilder<Params, Result>;
    notOnMainThread(): IncomingRpcMethod$IncomingRpcMethodBuilder<Params, Result>;
    param(paramName: string, paramSchema: Schema<Params>): IncomingRpcMethod$IncomingRpcMethodBuilder<Params, Result>;
    register(methodRegistry: IncomingRpcMethod<Object, Object>[], key: string): IncomingRpcMethod<Object, Object>;
    // private register(methodRegistry: IncomingRpcMethod<Object, Object>[], id: Identifier): IncomingRpcMethod<Object, Object>;
    response(resultName: string, resultSchema: Schema<Result>): IncomingRpcMethod$IncomingRpcMethodBuilder<Params, Result>;
    undiscoverable(): IncomingRpcMethod$IncomingRpcMethodBuilder<Params, Result>;
}