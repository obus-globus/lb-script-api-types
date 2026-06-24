import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class SculkChargeParticleOptions extends Record implements ParticleOptions {
    static CODEC: MapCodec<SculkChargeParticleOptions>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, SculkChargeParticleOptions>;
    constructor(roll: number)
    // private roll: number;
    equals(o: Object | null): boolean;
    getType(): ParticleType<SculkChargeParticleOptions>;
    hashCode(): number;
    roll(): number;
    toString(): string;
}