import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { OutgoingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$Attributes.d.ts'
import type { OutgoingRpcMethod$Factory } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$Factory.d.ts'
import type { ParamInfo } from '../../../../net/minecraft/server/jsonrpc/api/ParamInfo.d.ts'
import type { ResultInfo } from '../../../../net/minecraft/server/jsonrpc/api/ResultInfo.d.ts'
import type { Schema } from '../../../../net/minecraft/server/jsonrpc/api/Schema.d.ts'
export class OutgoingRpcMethod$OutgoingRpcMethodBuilder<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Object {
    static DEFAULT_ATTRIBUTES: OutgoingRpcMethod$Attributes;
    constructor(method: (param0: Params, param1: Result) => net.minecraft.server.jsonrpc.OutgoingRpcMethod<unknown, unknown>)
    // private description: string;
    // private method: (param0: Params, param1: Result) => net.minecraft.server.jsonrpc.OutgoingRpcMethod<unknown, unknown>;
    // private paramInfo: ParamInfo<Params>;
    // private resultInfo: ResultInfo<Result>;
    // private build(): OutgoingRpcMethod<Params, Result>;
    description(description: string): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Params, Result>;
    param(paramName: string, paramSchema: Schema<Params>): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Params, Result>;
    register(key: string): Holder$Reference<OutgoingRpcMethod<Params, Result>>;
    // private register(id: Identifier): Holder$Reference<OutgoingRpcMethod<Params, Result>>;
    response(resultName: string, resultSchema: Schema<Result>): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Params, Result>;
}