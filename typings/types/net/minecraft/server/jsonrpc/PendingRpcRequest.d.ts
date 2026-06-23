import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { OutgoingRpcMethod } from '../../../../net/minecraft/server/jsonrpc/OutgoingRpcMethod.d.ts'
export class PendingRpcRequest<Result extends unknown> extends Record {
    // private method: Holder$Reference<OutgoingRpcMethod<Object, Result>>;
    // private resultFuture: CompletableFuture<Result>;
    // private timeoutTime: number;
    accept(response: JsonElement): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    method(): Holder$Reference<OutgoingRpcMethod<Object, Result>>;
    resultFuture(): CompletableFuture<Result>;
    timedOut(currentTime: number): boolean;
    timeoutTime(): number;
    toString(): string;
}