import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { ScalableParticleOptionsBase } from '../../../../net/minecraft/core/particles/ScalableParticleOptionsBase.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class DustParticleOptions extends ScalableParticleOptionsBase {
    static CODEC: MapCodec<DustParticleOptions>;
    static MAX_SCALE: number;
    static MIN_SCALE: number;
    static REDSTONE: DustParticleOptions;
    static REDSTONE_PARTICLE_COLOR: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DustParticleOptions>;
    constructor(color: number, scale: number)
    readonly color: number;
    getColor(): Vector3f;
    getType(): ParticleType<DustParticleOptions>;
}