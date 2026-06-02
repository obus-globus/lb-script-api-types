import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class SimpleParticleType extends ParticleType<SimpleParticleType> implements ParticleOptions {
    constructor(overrideLimiter: boolean)
    // private codec: MapCodec<SimpleParticleType>;
    // private streamCodec: StreamCodec<RegistryFriendlyByteBuf, SimpleParticleType>;
    codec(): MapCodec<SimpleParticleType>;
    getType(): SimpleParticleType;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, SimpleParticleType>;
}