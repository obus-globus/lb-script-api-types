import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { OutgoingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$Attributes.d.ts'
import type { OutgoingRpcMethod$OutgoingRpcMethodBuilder } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$OutgoingRpcMethodBuilder.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
export class OutgoingRpcMethod$Method<Params extends Object | number | string | boolean, Result extends Object | number | string | boolean> extends Record implements OutgoingRpcMethod<Params, Result> {
    static NOTIFICATION_PREFIX: string;
    static notification(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<void, void>;
    static notificationWithParams(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Object, void>;
    static request(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<void, Object>;
    static requestWithParams(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Object, Object>;
    constructor(info: MethodInfo<Params, Result>, attributes: OutgoingRpcMethod$Attributes)
    // private attributes: OutgoingRpcMethod$Attributes;
    // private info: MethodInfo<Params, Result>;
    attributes(): OutgoingRpcMethod$Attributes;
    decodeResult(result: JsonElement): Result;
    encodeParams(params: Params): JsonElement;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): MethodInfo<Params, Result>;
    toString(): string;
}