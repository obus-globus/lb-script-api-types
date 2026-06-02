import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PositionSource } from '../../../../net/minecraft/world/level/gameevent/PositionSource.d.ts'
export class VibrationParticleOption extends Object implements ParticleOptions {
    static CODEC: MapCodec<VibrationParticleOption>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, VibrationParticleOption>;
    constructor(destination: PositionSource, arrivalInTicks: number)
    readonly arrivalInTicks: number;
    readonly destination: PositionSource;
    getArrivalInTicks(): number;
    getDestination(): PositionSource;
    getType(): ParticleType<VibrationParticleOption>;
}