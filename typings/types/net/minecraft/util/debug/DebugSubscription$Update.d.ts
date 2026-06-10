import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DebugSubscription } from '../../../../net/minecraft/util/debug/DebugSubscription.d.ts'
export class DebugSubscription$Update<T extends Object | number | string | boolean> extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DebugSubscription$Update<Object>>;
    constructor(subscription: DebugSubscription<T>, value: Optional<T>)
    // private subscription: DebugSubscription<T>;
    // private value: Optional<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    subscription(): DebugSubscription<T>;
    toString(): string;
    value(): Optional<T>;
}