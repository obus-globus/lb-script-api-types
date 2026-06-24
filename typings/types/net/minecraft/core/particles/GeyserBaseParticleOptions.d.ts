import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class GeyserBaseParticleOptions extends Record implements ParticleOptions {
    static codec(paramtype: ParticleType<GeyserBaseParticleOptions>): MapCodec<GeyserBaseParticleOptions>;
    static streamCodec(paramtype: ParticleType<GeyserBaseParticleOptions>): StreamCodec<Object, GeyserBaseParticleOptions>;
    constructor(type: ParticleType<GeyserBaseParticleOptions>, waterBlocks: number, burstImpulseBase: number)
    // private burstImpulseBase: number;
    // private waterBlocks: number;
    burstImpulseBase(): number;
    equals(o: Object | null): boolean;
    getType(): ParticleType<GeyserBaseParticleOptions>;
    hashCode(): number;
    toString(): string;
    type(): ParticleType<GeyserBaseParticleOptions>;
    waterBlocks(): number;
}