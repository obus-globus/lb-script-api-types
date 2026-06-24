import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class DebugGameEventListenerInfo extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DebugGameEventListenerInfo>;
    constructor(listenerRadius: number)
    // private listenerRadius: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    listenerRadius(): number;
    toString(): string;
}