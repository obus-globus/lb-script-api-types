import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { OutgoingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$Attributes.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
export interface OutgoingRpcMethod$Factory<Params extends unknown, Result extends unknown> extends Object{
    create(info: MethodInfo<Params, Result>, attributes: OutgoingRpcMethod$Attributes): OutgoingRpcMethod<Params, Result>;
}