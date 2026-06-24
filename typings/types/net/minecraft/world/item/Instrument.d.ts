import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class Instrument extends Record {
    static CODEC: Codec<Holder<Instrument>>;
    static DIRECT_CODEC: Codec<Instrument>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Instrument>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Instrument>>;
    constructor(soundEvent: Holder<SoundEvent>, useDuration: number, range: number, description: Component)
    // private description: Component;
    // private range: number;
    // private soundEvent: Holder<SoundEvent>;
    // private useDuration: number;
    description(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    range(): number;
    soundEvent(): Holder<SoundEvent>;
    toString(): string;
    useDuration(): number;
}