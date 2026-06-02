import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { ScalableParticleOptionsBase } from '../../../../net/minecraft/core/particles/ScalableParticleOptionsBase.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class DustColorTransitionOptions extends ScalableParticleOptionsBase {
    static CODEC: MapCodec<DustColorTransitionOptions>;
    static MAX_SCALE: number;
    static MIN_SCALE: number;
    static SCULK_PARTICLE_COLOR: number;
    static SCULK_TO_REDSTONE: DustColorTransitionOptions;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DustColorTransitionOptions>;
    constructor(fromColor: number, toColor: number, scale: number)
    readonly fromColor: number;
    readonly toColor: number;
    getFromColor(): Vector3f;
    getToColor(): Vector3f;
    getType(): ParticleType<DustColorTransitionOptions>;
}