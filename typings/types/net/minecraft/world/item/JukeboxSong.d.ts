import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class JukeboxSong extends Record {
    static CODEC: Codec<Holder<JukeboxSong>>;
    static DIRECT_CODEC: Codec<JukeboxSong>;
    static DIRECT_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, JukeboxSong>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<JukeboxSong>>;
    static fromStack(paramstack: ItemStack): Optional<Holder<JukeboxSong>>;
    constructor(soundEvent: Holder<SoundEvent>, description: Component, lengthInSeconds: number, comparatorOutput: number)
    // private comparatorOutput: number;
    // private description: Component;
    // private lengthInSeconds: number;
    // private soundEvent: Holder<SoundEvent>;
    comparatorOutput(): number;
    description(): Component;
    equals(o: Object | null): boolean;
    hasFinished(ticksElapsed: number): boolean;
    hashCode(): number;
    lengthInSeconds(): number;
    lengthInTicks(): number;
    soundEvent(): Holder<SoundEvent>;
    toString(): string;
}