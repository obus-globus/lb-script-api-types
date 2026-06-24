import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class GeyserParticleOptions extends Record implements ParticleOptions {
    static codec(paramtype: ParticleType<GeyserParticleOptions>): MapCodec<GeyserParticleOptions>;
    static streamCodec(paramtype: ParticleType<GeyserParticleOptions>): StreamCodec<Object, GeyserParticleOptions>;
    constructor(type: ParticleType<GeyserParticleOptions>, waterBlocks: number)
    // private waterBlocks: number;
    equals(o: Object | null): boolean;
    getType(): ParticleType<GeyserParticleOptions>;
    hashCode(): number;
    toString(): string;
    type(): ParticleType<GeyserParticleOptions>;
    waterBlocks(): number;
}