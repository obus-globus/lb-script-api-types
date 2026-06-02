import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ExplosionParticleInfo extends Record {
    static CODEC: MapCodec<ExplosionParticleInfo>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ExplosionParticleInfo>;
    // private particle: ParticleOptions;
    // private scaling: number;
    // private speed: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    particle(): ParticleOptions;
    scaling(): number;
    speed(): number;
    toString(): string;
}