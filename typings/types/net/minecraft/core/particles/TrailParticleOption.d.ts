import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrailParticleOption extends Record implements ParticleOptions {
    static CODEC: MapCodec<TrailParticleOption>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TrailParticleOption>;
    constructor(target: Vec3, color: number, duration: number)
    // private color: number;
    // private duration: number;
    // private target: Vec3;
    color(): number;
    duration(): number;
    equals(o: Object | null): boolean;
    getType(): ParticleType<TrailParticleOption>;
    hashCode(): number;
    target(): Vec3;
    toString(): string;
}