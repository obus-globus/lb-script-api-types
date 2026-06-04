import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
import type { OutgoingRpcMethod$Attributes } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$Attributes.d.ts'
import type { OutgoingRpcMethod$OutgoingRpcMethodBuilder } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod$OutgoingRpcMethodBuilder.d.ts'
import type { MethodInfo } from '../../../../net/minecraft/server/jsonrpc/api/MethodInfo.d.ts'
export class OutgoingRpcMethod$Notification<Params extends Object | number | string | boolean> extends Record implements OutgoingRpcMethod<Params, void> {
    static NOTIFICATION_PREFIX: string;
    static notification(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<void, void>;
    static notificationWithParams(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Object, void>;
    static request(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<void, Object>;
    static requestWithParams(): OutgoingRpcMethod$OutgoingRpcMethodBuilder<Object, Object>;
    constructor(info: MethodInfo<Params, void>, attributes: OutgoingRpcMethod$Attributes)
    // private attributes: OutgoingRpcMethod$Attributes;
    // private info: MethodInfo<Params, void>;
    attributes(): OutgoingRpcMethod$Attributes;
    decodeResult<Result extends Object | number | string | boolean>(result: JsonElement): Result;
    encodeParams(params: Params): JsonElement;
    equals(o: Object | null): boolean;
    hashCode(): number;
    info(): MethodInfo<Params, void>;
    toString(): string;
}