import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { DamageEffects } from '../../../../net/minecraft/world/damagesource/DamageEffects.d.ts'
import type { DamageScaling } from '../../../../net/minecraft/world/damagesource/DamageScaling.d.ts'
import type { DeathMessageType } from '../../../../net/minecraft/world/damagesource/DeathMessageType.d.ts'
export class DamageType extends Record {
    static CODEC: Codec<Holder<DamageType>>;
    static DIRECT_CODEC: Codec<DamageType>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<DamageType>>;
    // private deathMessageType: DeathMessageType;
    // private effects: DamageEffects;
    // private exhaustion: number;
    // private msgId: string;
    // private scaling: DamageScaling;
    deathMessageType(): DeathMessageType;
    effects(): DamageEffects;
    equals(o: Object | null): boolean;
    exhaustion(): number;
    hashCode(): number;
    msgId(): string;
    scaling(): DamageScaling;
    toString(): string;
}