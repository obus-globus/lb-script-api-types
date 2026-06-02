import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DebugSubscription$Event } from '../../../../net/minecraft/util/debug/DebugSubscription$Event.d.ts'
import type { DebugSubscription$Update } from '../../../../net/minecraft/util/debug/DebugSubscription$Update.d.ts'
export class DebugSubscription<T extends Object | number | string | boolean> extends Object {
    static DOES_NOT_EXPIRE: number;
    constructor(valueStreamCodec: StreamCodec<RegistryFriendlyByteBuf, T>)
    constructor(valueStreamCodec: StreamCodec<RegistryFriendlyByteBuf, T>, expireAfterTicks: number)
    // private expireAfterTicks: number;
    // private valueStreamCodec: StreamCodec<RegistryFriendlyByteBuf, T>;
    emptyUpdate(): DebugSubscription$Update<T>;
    expireAfterTicks(): number;
    packEvent(value: T): DebugSubscription$Event<T>;
    packUpdate(value: T): DebugSubscription$Update<T>;
    toString(): string;
    valueStreamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
}