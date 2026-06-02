import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { MobEffect } from '../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class SuspiciousStewEffects$Entry extends Record {
    static CODEC: Codec<SuspiciousStewEffects$Entry>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, SuspiciousStewEffects$Entry>;
    // private duration: number;
    // private effect: Holder<MobEffect>;
    createEffectInstance(): MobEffectInstance;
    duration(): number;
    effect(): Holder<MobEffect>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}