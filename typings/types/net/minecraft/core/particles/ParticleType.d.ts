import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export abstract class ParticleType<T extends ParticleOptions> extends Object {
    constructor(overrideLimiter: boolean)
    readonly overrideLimiter: boolean;
    codec(): MapCodec<T>;
    getOverrideLimiter(): boolean;
    streamCodec(): StreamCodec<RegistryFriendlyByteBuf, T>;
}