import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ShriekParticleOption extends Object implements ParticleOptions {
    static CODEC: MapCodec<ShriekParticleOption>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ShriekParticleOption>;
    constructor(delay: number)
    readonly delay: number;
    getDelay(): number;
    getType(): ParticleType<ShriekParticleOption>;
}