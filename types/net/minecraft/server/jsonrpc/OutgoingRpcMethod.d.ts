import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OutgoingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$Attributes.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
export interface OutgoingRpcMethod<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Object{
    attributes(): OutgoingRpcMethod$Attributes;
    decodeResult(result: JsonElement): Result;
    encodeParams(params: Params): JsonElement;
    info(): MethodInfo<Params, Result>;
}