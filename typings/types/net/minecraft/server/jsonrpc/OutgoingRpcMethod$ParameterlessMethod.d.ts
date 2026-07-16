import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { OutgoingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$Attributes.d.ts'
import type { OutgoingRpcMethod$OutgoingRpcMethodBuilder } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$OutgoingRpcMethodBuilder.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
export class OutgoingRpcMethod$ParameterlessMethod<Result extends unknown> extends Record implements OutgoingRpcMethod<void, Result> {
    static NOTIFICATION_PREFIX: string;
    static notification(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<void, void>;
    static notificationWithParams<Params extends unknown>(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Params, void>;
    static request<Result extends unknown>(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<void, Result>;
    static requestWithParams<Params extends unknown, Result extends unknown>(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Params, Result>;
    constructor(info: MethodInfo<void, Result>, attributes: OutgoingRpcMethod$Attributes)
    // private attributes: OutgoingRpcMethod$Attributes;
    // private info: MethodInfo<void, Result>;
    attributes(): OutgoingRpcMethod$Attributes;
    decodeResult(result: JsonElement): Result;
    encodeParams(params: void): JsonElement;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): MethodInfo<void, Result>;
    toString(): string;
}